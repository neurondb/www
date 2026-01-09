'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Terminal, Play, Square, RotateCcw, Copy, Check } from 'lucide-react'

interface TerminalCommand {
  command: string
  output: string[]
  timestamp: string
}

const NeuronMCPDemoTerminal = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [currentCommand, setCurrentCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState<TerminalCommand[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [copied, setCopied] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const timeoutRefs = useRef<NodeJS.Timeout[]>([])

  const commands = [
    {
      command: 'echo \'{"jsonrpc": "2.0", "id": 1, "method": "tools/list"}\' | ./neurondb-mcp',
      output: [
        '{',
        '  "jsonrpc": "2.0",',
        '  "id": 1,',
        '  "result": {',
        '    "tools": [',
        '      {',
        '        "name": "vector_search",',
        '        "description": "Search for similar vectors in the database"',
        '      },',
        '      {',
        '        "name": "generate_embedding",',
        '        "description": "Generate embeddings for text or images"',
        '      },',
        '      {',
        '        "name": "train_model",',
        '        "description": "Train a machine learning model"',
        '      }',
        '    ]',
        '  }',
        '}'
      ]
    },
    {
      command: 'echo \'{"jsonrpc": "2.0", "id": 2, "method": "tools/call", "params": {"name": "vector_search", "arguments": {"query_vector": [0.1, 0.2, 0.3], "table": "documents", "limit": 5}}}\' | ./neurondb-mcp',
      output: [
        '{',
        '  "jsonrpc": "2.0",',
        '  "id": 2,',
        '  "result": {',
        '    "results": [',
        '      {"id": 1, "score": 0.95, "title": "Introduction to ML"},',
        '      {"id": 2, "score": 0.92, "title": "Neural Networks"},',
        '      {"id": 3, "score": 0.88, "title": "Deep Learning Guide"}',
        '    ]',
        '  }',
        '}'
      ]
    },
    {
      command: 'echo \'{"jsonrpc": "2.0", "id": 3, "method": "tools/call", "params": {"name": "generate_embedding", "arguments": {"text": "What is machine learning?", "model": "text-embedding-ada-002"}}}\' | ./neurondb-mcp',
      output: [
        '{',
        '  "jsonrpc": "2.0",',
        '  "id": 3,',
        '  "result": {',
        '    "embedding": [0.1, 0.2, 0.3, ...],',
        '    "dimension": 1536,',
        '    "model": "text-embedding-ada-002"',
        '  }',
        '}'
      ]
    },
    {
      command: 'echo \'{"jsonrpc": "2.0", "id": 4, "method": "resources/list"}\' | ./neurondb-mcp',
      output: [
        '{',
        '  "jsonrpc": "2.0",',
        '  "id": 4,',
        '  "result": {',
        '    "resources": [',
        '      {"uri": "schema://tables", "name": "Database Tables"},',
        '      {"uri": "models://list", "name": "ML Models"},',
        '      {"uri": "indexes://vector", "name": "Vector Indexes"}',
        '    ]',
        '  }',
        '}'
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (terminalRef.current && isRunning) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory, isRunning, currentCommand])

  const cleanup = useCallback(() => {
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
    timeoutRefs.current = []
  }, [])

  useEffect(() => {
    return () => cleanup()
  }, [cleanup])

  const typeCommand = useCallback((text: string, onComplete: () => void) => {
    setIsTyping(true)
    setCurrentCommand('')
    let index = 0
    
    const typeChar = () => {
      if (index < text.length) {
        setCurrentCommand(prev => prev + text[index])
        index++
        const timeout = setTimeout(typeChar, 30)
        timeoutRefs.current.push(timeout)
      } else {
        setIsTyping(false)
        onComplete()
      }
    }
    
    typeChar()
  }, [])

  const showOutput = useCallback((output: string[], onComplete: () => void) => {
    let outputIndex = 0
    const currentOutput: string[] = []
    
    const showNextLine = () => {
      if (outputIndex < output.length) {
        currentOutput.push(output[outputIndex])
        setCommandHistory(prev => {
          const newHistory = [...prev]
          newHistory[newHistory.length - 1] = {
            ...newHistory[newHistory.length - 1],
            output: [...currentOutput]
          }
          return newHistory
        })
        outputIndex++
        const timeout = setTimeout(showNextLine, 100)
        timeoutRefs.current.push(timeout)
      } else {
        setTimeout(onComplete, 500)
      }
    }
    
    showNextLine()
  }, [])

  const runDemo = useCallback(() => {
    if (isRunning) return
    
    cleanup()
    setIsRunning(true)
    setCommandHistory([])
    setCurrentCommand('')
    
    let commandIndex = 0
    
    const runNextCommand = () => {
      if (commandIndex >= commands.length) {
        setIsRunning(false)
        cleanup()
        return
      }
      
      const cmd = commands[commandIndex]
      
      typeCommand(cmd.command, () => {
        setCommandHistory(prev => [
          ...prev,
          {
            command: cmd.command,
            output: [],
            timestamp: new Date().toLocaleTimeString()
          }
        ])
        
        const timeout1 = setTimeout(() => {
          showOutput(cmd.output, () => {
            const timeout2 = setTimeout(() => {
              commandIndex++
              runNextCommand()
            }, 1000)
            timeoutRefs.current.push(timeout2)
          })
        }, 300)
        timeoutRefs.current.push(timeout1)
      })
    }
    
    runNextCommand()
  }, [isRunning, commands, typeCommand, showOutput, cleanup])

  const stopDemo = useCallback(() => {
    cleanup()
    setIsRunning(false)
    setCurrentCommand('')
    setIsTyping(false)
  }, [cleanup])

  const resetDemo = useCallback(() => {
    cleanup()
    setIsRunning(false)
    setCurrentCommand('')
    setCommandHistory([])
    setIsTyping(false)
  }, [cleanup])

  const copyAll = useCallback(() => {
    const allText = commandHistory.map(cmd => 
      `${cmd.command}\n${cmd.output.join('\n')}`
    ).join('\n\n')
    
    navigator.clipboard.writeText(allText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [commandHistory])

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold">NeuronMCP Protocol Demo</span>
          </div>
          <div className="flex items-center gap-2">
            {!isRunning && commandHistory.length > 0 && (
              <button
                onClick={copyAll}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                title="Copy all"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            )}
            {!isRunning && commandHistory.length === 0 && (
              <button
                onClick={runDemo}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors font-semibold text-sm"
              >
                <Play className="w-4 h-4" />
                Run Demo
              </button>
            )}
            {isRunning && (
              <button
                onClick={stopDemo}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm"
              >
                <Square className="w-4 h-4" />
                Stop
              </button>
            )}
            {!isRunning && commandHistory.length > 0 && (
              <>
                <button
                  onClick={runDemo}
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors font-semibold text-sm"
                >
                  <Play className="w-4 h-4" />
                  Run Again
                </button>
                <button
                  onClick={resetDemo}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors font-semibold text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
              </>
            )}
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="h-[500px] overflow-y-auto p-4 font-mono text-sm bg-black text-left"
          style={{
            fontFamily: 'JetBrains Mono, Fira Code, Monaco, Consolas, monospace',
            lineHeight: '1.6'
          }}
        >
          {commandHistory.length === 0 && !isRunning && (
            <div className="text-gray-500 mb-4">
              <div className="text-cyan-400 text-base font-bold mb-2 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                NeuronMCP Protocol Demo Terminal
              </div>
              <div className="text-gray-400 text-xs mb-3">
                Interactive demonstration of NeuronMCP JSON-RPC 2.0 protocol over stdio for MCP-compatible clients.
              </div>
              <div className="text-emerald-400 text-xs font-semibold mb-2 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-emerald-400/10 rounded">JSON-RPC 2.0</span>
                <span className="px-2 py-1 bg-emerald-400/10 rounded">stdio Transport</span>
                <span className="px-2 py-1 bg-emerald-400/10 rounded">MCP Protocol</span>
                <span className="px-2 py-1 bg-emerald-400/10 rounded">Claude Desktop</span>
              </div>
              <div className="text-gray-600 text-xs mt-2">
                Click "Run Demo" to see NeuronMCP protocol in action
              </div>
            </div>
          )}

          {commandHistory.map((cmd, idx) => (
            <div key={idx} className="mb-4">
              <div className="text-gray-500 text-xs mb-1">{cmd.timestamp}</div>
              <div className="text-yellow-400 mb-2 whitespace-pre-wrap break-words">
                {cmd.command}
              </div>
              {cmd.output.length > 0 && (
                <div className="text-green-400 ml-4 whitespace-pre-wrap break-words">
                  {cmd.output.join('\n')}
                </div>
              )}
            </div>
          ))}

          {isRunning && (
            <div className="mb-4">
              <div className="text-gray-500 text-xs mb-1">{new Date().toLocaleTimeString()}</div>
              <div className="text-yellow-400 whitespace-pre-wrap break-words">
                {currentCommand}
                <span className={cursorVisible ? 'opacity-100' : 'opacity-0'}>█</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NeuronMCPDemoTerminal
















