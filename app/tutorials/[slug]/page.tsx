import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BlogMarkdown } from '../../_components/BlogMarkdown'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

// Tutorials data
const tutorials = [
  {
    slug: 'ai-tutorial-01-introduction',
    title: 'Introduction to Machine Learning',
    excerpt: 'Learn what machine learning is and how it differs from traditional programming. Covers supervised, unsupervised, and reinforcement learning with Python and SQL examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '20 min read',
    level: 'Beginner',
    order: 1,
  },
  {
    slug: 'ai-tutorial-02-data-preparation',
    title: 'Data Preparation and Feature Engineering',
    excerpt: 'Master data collection, cleaning, feature selection, and transformation. Learn to handle missing values, outliers, normalization, and standardization with practical examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '25 min read',
    level: 'Beginner',
    order: 2,
  },
  {
    slug: 'ai-tutorial-03-linear-models',
    title: 'Linear Models: Regression and Classification',
    excerpt: 'Understand linear regression and logistic regression. Learn cost functions, gradient descent, and model evaluation metrics with Python and SQL implementations.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '22 min read',
    level: 'Beginner',
    order: 3,
  },
  {
    slug: 'ai-tutorial-04-neural-networks',
    title: 'Neural Networks: From Perceptrons to Deep Learning',
    excerpt: 'Build neural networks from scratch. Learn perceptrons, multi-layer networks, activation functions, and forward propagation with NumPy and SQL storage examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '28 min read',
    level: 'Beginner',
    order: 4,
  },
  {
    slug: 'ai-tutorial-05-training',
    title: 'Training Neural Networks',
    excerpt: 'Master loss functions, backpropagation, optimizers, and learning rates. Implement training loops in Python and log metrics in SQL databases.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '30 min read',
    level: 'Beginner',
    order: 5,
  },
  {
    slug: 'ai-tutorial-06-regularization',
    title: 'Overfitting and Regularization',
    excerpt: 'Understand bias-variance tradeoff, overfitting detection, and regularization techniques. Learn L1, L2, dropout, and cross-validation with examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '24 min read',
    level: 'Beginner',
    order: 6,
  },
  {
    slug: 'ai-tutorial-07-embeddings',
    title: 'Embeddings: Representing Data as Vectors',
    excerpt: 'Learn word embeddings, sentence embeddings, and document embeddings. Understand embedding properties, similarity, and arithmetic with practical examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '26 min read',
    level: 'Intermediate',
    order: 7,
  },
  {
    slug: 'ai-tutorial-08-transformers',
    title: 'Transformers: Architecture and Self-Attention',
    excerpt: 'Master the transformer architecture and self-attention mechanism. Learn multi-head attention, encoder-decoder structures, and positional encoding.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '32 min read',
    level: 'Intermediate',
    order: 8,
  },
  {
    slug: 'ai-tutorial-09-llms',
    title: 'Large Language Models: How LLMs Work',
    excerpt: 'Understand pre-training, fine-tuning, tokenization, and model architectures. Learn GPT, BERT, and T5 with inference and generation examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '28 min read',
    level: 'Intermediate',
    order: 9,
  },
  {
    slug: 'ai-tutorial-10-vector-search',
    title: 'Vector Search: Similarity and Distance Metrics',
    excerpt: 'Master vector similarity concepts and distance metrics. Learn cosine, Euclidean, and Manhattan distances with indexing strategies and SQL examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '24 min read',
    level: 'Intermediate',
    order: 10,
  },
  {
    slug: 'ai-tutorial-11-semantic-search',
    title: 'Semantic Search: Finding Meaning in Text',
    excerpt: 'Build semantic search systems with document chunking, query processing, and ranking. Learn keyword vs semantic search with complete implementations.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '30 min read',
    level: 'Intermediate',
    order: 11,
  },
  {
    slug: 'ai-tutorial-12-rag-fundamentals',
    title: 'RAG Fundamentals: Retrieval-Augmented Generation Basics',
    excerpt: 'Learn RAG architecture, document processing, retrieval strategies, and context building. Build complete RAG systems with Python and SQL examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '35 min read',
    level: 'Intermediate',
    order: 12,
  },
  {
    slug: 'ai-tutorial-13-advanced-rag',
    title: 'Advanced RAG: Hybrid Search and Reranking',
    excerpt: 'Master hybrid search combining semantic and keyword search. Learn reranking strategies, multi-vector approaches, and temporal search with SQL examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '32 min read',
    level: 'Advanced',
    order: 13,
  },
  {
    slug: 'ai-tutorial-14-prompt-engineering',
    title: 'Prompt Engineering: Techniques and Best Practices',
    excerpt: 'Learn prompt design principles, few-shot learning, chain-of-thought prompting, and optimization. Build prompt template systems with examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '28 min read',
    level: 'Advanced',
    order: 14,
  },
  {
    slug: 'ai-tutorial-15-model-evaluation',
    title: 'Model Evaluation: Metrics and Testing',
    excerpt: 'Master classification and regression metrics. Learn embedding quality metrics, A/B testing, and comprehensive evaluation suites with SQL storage.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '26 min read',
    level: 'Advanced',
    order: 15,
  },
  {
    slug: 'ai-tutorial-16-fine-tuning',
    title: 'Fine-tuning: Adapting Models to Your Data',
    excerpt: 'Understand transfer learning and fine-tuning strategies. Learn dataset preparation, training procedures, and evaluation with transformer examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '30 min read',
    level: 'Advanced',
    order: 16,
  },
  {
    slug: 'ai-tutorial-17-production',
    title: 'Production Deployment: Scaling and Optimization',
    excerpt: 'Learn model serving architectures, batch vs real-time inference, performance optimization, caching, and monitoring with deployment examples.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '28 min read',
    level: 'Advanced',
    order: 17,
  },
  {
    slug: 'ai-tutorial-18-advanced-architectures',
    title: 'Advanced Architectures: Multi-vector and Temporal Search',
    excerpt: 'Master multi-vector embeddings, temporal search patterns, ensemble methods, and advanced indexing with complex architecture implementations.',
    author: 'NeuronDB Team',
    date: '2025-02-24',
    readTime: '30 min read',
    level: 'Advanced',
    order: 18,
  },
]

// Generate static params for all tutorials
export async function generateStaticParams() {
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }))
}

// Generate metadata for each tutorial
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tutorial = tutorials.find((t) => t.slug === params.slug)
  
  if (!tutorial) {
    return {
      title: 'Tutorial Not Found',
    }
  }

  return {
    title: `${tutorial.title} | AI Tutorials | NeuronDB`,
    description: tutorial.excerpt,
    authors: [{ name: tutorial.author }],
    openGraph: {
      title: tutorial.title,
      description: tutorial.excerpt,
      type: 'article',
      url: `https://neurondb.ai/tutorials/${tutorial.slug}`,
      siteName: 'NeuronDB',
      publishedTime: tutorial.date,
      authors: [tutorial.author],
      images: [
        {
          url: `https://neurondb.ai/tutorials/${tutorial.slug}/header.svg`,
          width: 1200,
          height: 400,
          alt: tutorial.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: tutorial.title,
      description: tutorial.excerpt,
      images: [`https://neurondb.ai/tutorials/${tutorial.slug}/header.svg`],
      creator: '@neurondb',
    },
    alternates: {
      canonical: `https://neurondb.ai/tutorials/${tutorial.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

function getIntroductionTutorialContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return `
## What is Machine Learning

Machine learning lets computers learn from data. You provide examples. The system finds patterns. It makes predictions on new data. Traditional programming requires explicit rules. Machine learning discovers rules from data.

Traditional programming works like this. You write code. Code processes input. Code produces output. Rules are fixed. Rules handle known cases. New cases need code changes. Machine learning works differently. You provide data and outcomes. The system builds a model. The model captures patterns. New inputs produce predictions without code changes.

## Machine Learning vs Traditional Programming

Traditional programming uses explicit instructions. You define every step. Input maps to output through code. Machine learning uses examples. Examples show input-output pairs. The system learns the mapping. You do not write the mapping rules.

![Machine Learning vs Traditional Programming Diagram](/tutorials/ai-tutorial-01-introduction/diagram-traditional-vs-ml.svg)

Consider email classification. Traditional programming needs rules. You check sender domains. You look for keywords. You examine patterns. Each rule is explicit. Machine learning uses examples. You label emails as spam or not. The system learns patterns. It finds features you might miss.

\`\`\`python
# Traditional Programming: Explicit Rules
def classify_email_traditional(email):
    spam_keywords = ['win', 'free', 'urgent', 'click', 'prize']
    if any(keyword in email.lower() for keyword in spam_keywords):
        return "spam"
    return "not spam"

# Machine Learning: Learned from Examples
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

emails = ["Win free money!", "Meeting at 2 PM", "Click here now!", "Review attached file"]
labels = ["spam", "not spam", "spam", "not spam"]

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(emails)
model = MultinomialNB()
model.fit(X, labels)

# Traditional: Explicit rule
result1 = classify_email_traditional("Win a free prize!")
print("Traditional: " + result1)

# ML: Learned pattern
result2 = model.predict(vectorizer.transform(["Win a free prize!"]))
print("Machine Learning: " + str(result2[0]))
# Result:
# Traditional: spam
# Machine Learning: spam
\`\`\`

## Types of Machine Learning

Machine learning divides into three categories. Supervised learning uses labeled examples. Unsupervised learning finds patterns without labels. Reinforcement learning learns through rewards.

### Supervised Learning

Supervised learning uses labeled training data. Each example has input and correct output. The system learns to map inputs to outputs. After training, it predicts outputs for new inputs.

Common supervised learning tasks include classification and regression. Classification predicts categories. Examples include email spam detection, image recognition, and disease diagnosis. Regression predicts numbers. Examples include house prices, temperature forecasts, and sales predictions.

\`\`\`python
# Classification Example: Predicting Categories
from sklearn.linear_model import LogisticRegression
import numpy as np

# Features: [age, income] | Labels: 0=no loan, 1=loan approved
X = np.array([[25, 30000], [35, 50000], [45, 80000], [30, 40000]])
y = np.array([0, 1, 1, 0])

model = LogisticRegression()
model.fit(X, y)

prediction = model.predict([[40, 60000]])
print("Loan approved: " + str(prediction[0]))
# Result: Loan approved: 1
\`\`\`

\`\`\`sql
-- NeuronDB: Classification using SQL
CREATE TABLE loan_applications (
    id SERIAL PRIMARY KEY,
    age INTEGER,
    income NUMERIC,
    approved BOOLEAN
);

INSERT INTO loan_applications (age, income, approved) VALUES
    (25, 30000, false), (35, 50000, true),
    (45, 80000, true), (30, 40000, false);

CREATE TEMP TABLE loan_model AS
SELECT neurondb.train(
    'default',
    'logistic_regression',
    'loan_applications',
    'approved',
    ARRAY['age', 'income'],
    '{"max_iters": 1000, "learning_rate": 0.01}'::jsonb
)::integer AS model_id;

SELECT neurondb.predict(
    (SELECT model_id FROM loan_model),
    ARRAY[40::NUMERIC, 60000::NUMERIC]
) AS prediction;

-- Result:
--  prediction
-- -----------
--  t
-- (1 row)
\`\`\`

![Supervised Learning Diagram](/tutorials/ai-tutorial-01-introduction/diagram-supervised-learning.svg)

Classification works with discrete outputs. The output is a category. Email is spam or not spam. Image shows a cat or a dog. Patient has disease or no disease. Regression works with continuous outputs. The output is a number. House price is 450,000 dollars. Temperature tomorrow is 72 degrees. Sales next month is 15,000 units.

\`\`\`python
# Regression Example: Predicting Numbers
from sklearn.linear_model import LinearRegression
import numpy as np

# Features: [square_feet, bedrooms] | Target: price
X = np.array([[1500, 2], [2000, 3], [2500, 4], [1800, 3]])
y = np.array([250000, 350000, 450000, 300000])

model = LinearRegression()
model.fit(X, y)

price = model.predict([[2200, 3]])
print("Predicted price: $" + str(int(price[0])))
# Result: Predicted price: $380000
\`\`\`

\`\`\`sql
-- NeuronDB: Regression using SQL
CREATE TABLE house_sales (
    id SERIAL PRIMARY KEY,
    square_feet INTEGER,
    bedrooms INTEGER,
    price NUMERIC
);

INSERT INTO house_sales (square_feet, bedrooms, price) VALUES
    (1500, 2, 250000), (2000, 3, 350000),
    (2500, 4, 450000), (1800, 3, 300000);

CREATE TEMP TABLE price_model AS
SELECT neurondb.train(
    'default',
    'linear_regression',
    'house_sales',
    'price',
    ARRAY['square_feet', 'bedrooms'],
    '{}'::jsonb
)::integer AS model_id;

SELECT neurondb.predict(
    (SELECT model_id FROM price_model),
    ARRAY[2200::NUMERIC, 3::NUMERIC]
) AS predicted_price;

-- Result:
--  predicted_price
-- -----------------
--       380000.00
-- (1 row)
\`\`\`

Supervised learning requires labeled data. Labeling is expensive. It takes human time. Large datasets need many labels. The quality of labels affects results. Bad labels produce bad models. Good labels produce good models.

### Unsupervised Learning

Unsupervised learning uses unlabeled data. There are no correct answers. The system finds patterns or structure. It discovers hidden relationships.

Common unsupervised learning tasks include clustering and dimensionality reduction. Clustering groups similar examples. Examples include customer segmentation, image grouping, and anomaly detection. Dimensionality reduction simplifies data. It reduces features while keeping important information. Examples include visualization and noise removal.

\`\`\`python
# Clustering Example: Grouping Similar Customers
from sklearn.cluster import KMeans
import numpy as np

# Customer features: [annual_spending, num_orders]
customers = np.array([[500, 10], [1200, 25], [300, 5], [1500, 30], [400, 8]])

kmeans = KMeans(n_clusters=2, random_state=42)
clusters = kmeans.fit_predict(customers)

for i, cluster in enumerate(clusters):
    print("Customer " + str(i+1) + ": Cluster " + str(cluster))
# Result:
# Customer 1: Cluster 1
# Customer 2: Cluster 0
# Customer 3: Cluster 1
# Customer 4: Cluster 0
# Customer 5: Cluster 1
\`\`\`

\`\`\`sql
-- NeuronDB: Clustering using SQL
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    annual_spending NUMERIC,
    num_orders INTEGER
);

INSERT INTO customers (annual_spending, num_orders) VALUES
    (500, 10), (1200, 25), (300, 5), (1500, 30), (400, 8);

ALTER TABLE customers ADD COLUMN features vector(2);
UPDATE customers SET features = ARRAY[annual_spending, num_orders::NUMERIC]::vector(2);

SELECT customer_id, cluster_id
FROM neurondb.cluster_kmeans('customers', 'features', 2, 100);

-- Result:
--  customer_id | cluster_id
-- -------------+------------
--            1 |          1
--            2 |          0
--            3 |          1
--            4 |          0
--            5 |          1
-- (5 rows)
\`\`\`

![Unsupervised Learning Diagram](/tutorials/ai-tutorial-01-introduction/diagram-unsupervised-learning.svg)

Clustering automatically finds groups in data without predefined categories. Similar items belong together in the same cluster while dissimilar items are placed in separate clusters. The system discovers these groups by analyzing patterns in the data. Applications include customer segmentation, image organization, and anomaly detection when you don't know the groups in advance.

Dimensionality reduction simplifies data by reducing the number of features while preserving essential information. Similar items belong together in the same cluster while dissimilar items are placed in separate clusters. The system discovers these groups by analyzing patterns in the data, which makes clustering useful for customer segmentation, image organization, and anomaly detection when you don't know the groups in advance.

Dimensionality reduction simplifies data by reducing the number of features while preserving essential information. Many features create complexity, and some are redundant or add noise. Reduction techniques identify the most important features and create lower-dimensional representations that make data easier to understand and visualize while speeding up subsequent algorithms without losing critical information.

### Reinforcement Learning

Reinforcement learning learns through interaction. An agent takes actions in an environment. It receives rewards or penalties. It learns which actions maximize rewards. No labeled examples are needed.

![Reinforcement Learning Diagram](/tutorials/ai-tutorial-01-introduction/diagram-reinforcement-learning.svg)

Reinforcement learning works in steps. The agent observes the current state, chooses an action, and sends it to the environment. The environment changes and returns a new state plus a reward or penalty. The agent updates its strategy based on rewards received. This creates a learning loop: observe state, choose action, receive reward, update strategy. Over time, the agent learns optimal actions that maximize cumulative rewards. Applications include game playing where agents learn to win through trial and error, robotics where robots learn navigation by exploring and receiving feedback, and recommendation systems that learn user preferences from interaction rewards.

## Key Concepts

Understanding these concepts is essential for machine learning. Features describe your data. Labels provide correct answers. Training builds the model. Testing validates performance. Overfitting is a common problem to avoid.

![Key Concepts Diagram](/tutorials/ai-tutorial-01-introduction/diagram-key-concepts.svg)

These core concepts form the foundation of machine learning. Master them to build effective models.

### Features

Features are input variables that describe examples. An email has features like sender address, subject length, and word count. A house has features like square footage, number of bedrooms, and location. Features must be numeric or convertible to numbers. Feature selection matters. Good features improve predictions while bad features hurt predictions. Too many features cause overfitting. Too few features miss important patterns.

- **Feature Types**: Two main types: numeric (age, price, temperature) with mathematical meaning, and categorical (color, city, status) representing discrete classes. Convert categorical via one-hot (binary columns), label encoding (numbers), or target encoding (target statistics).

\`\`\`python
# Feature Encoding Example
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
import pandas as pd

data = pd.DataFrame({'city': ['NYC', 'SF', 'NYC', 'LA', 'SF']})
onehot = pd.get_dummies(data['city'])
print(onehot)
# Result:
#    LA  NYC  SF
# 0   0    1   0
# 1   0    0   1
# 2   0    1   0
# 3   1    0   0
# 4   0    0   1
\`\`\`

\`\`\`sql
-- NeuronDB: Feature Encoding
CREATE TEMP TABLE customer_data AS
SELECT unnest(ARRAY['NYC', 'SF', 'NYC', 'LA', 'SF']) AS city;

SELECT 
    city,
    CASE WHEN city = 'NYC' THEN 1 ELSE 0 END AS is_nyc,
    CASE WHEN city = 'SF' THEN 1 ELSE 0 END AS is_sf,
    CASE WHEN city = 'LA' THEN 1 ELSE 0 END AS is_la
FROM customer_data;

-- Result:
--  city | is_nyc | is_sf | is_la
-- ------+--------+-------+-------
--  NYC  |      1 |     0 |     0
--  SF   |      0 |     1 |     0
--  NYC  |      1 |     0 |     0
--  LA   |      0 |     0 |     1
--  SF   |      0 |     1 |     0
-- (5 rows)
\`\`\`
- **Feature Scaling**: Normalize different feature ranges (age 0-100 vs income 0-1M) to make comparable and help convergence. Min-max transforms to 0-1; standardization to zero mean and unit variance. Required for k-NN and neural networks; decision trees are scale-invariant.

\`\`\`python
# Feature Scaling Example
from sklearn.preprocessing import StandardScaler, MinMaxScaler
import numpy as np

data = np.array([[25, 50000], [30, 75000], [35, 100000]])
scaler = StandardScaler()
scaled = scaler.fit_transform(data)
print(scaled)
# Result:
# [[-1.22474487 -1.22474487]
#  [ 0.          0.        ]
#  [ 1.22474487  1.22474487]]
\`\`\`

\`\`\`sql
-- NeuronDB: Feature Scaling
CREATE TEMP TABLE customer_features AS
SELECT * FROM (VALUES 
    (25, 50000), 
    (30, 75000), 
    (35, 100000)
) AS t(age, income);

SELECT 
    age,
    income,
    ROUND((age - AVG(age) OVER ()) / NULLIF(STDDEV(age) OVER (), 0), 2) AS age_scaled,
    ROUND((income - AVG(income) OVER ()) / NULLIF(STDDEV(income) OVER (), 0), 2) AS income_scaled
FROM customer_features;

-- Result:
--  age | income | age_scaled | income_scaled
-- -----+--------+------------+---------------
--   25 |  50000 |      -1.22 |         -1.22
--   30 |  75000 |       0.00 |          0.00
--   35 | 100000 |       1.22 |          1.22
-- (3 rows)
\`\`\`
- **Feature Engineering**: Transform raw data into useful features: interaction (price × area), polynomial (x², x³), time-based (day, month, hour), text (word counts, TF-IDF, embeddings). Requires domain knowledge but dramatically improves performance.
- **Feature Selection**: Reduce dimensionality using filter methods (statistical tests), wrapper methods (model performance), or embedded methods (L1 regularization). Finds minimal feature sets that maximize performance while reducing noise and preventing overfitting.
- **Feature Extraction**: Create new lower-dimensional representations using principal component analysis (PCA) for linear combinations or autoencoders for neural network compression. Reduces dimensions while preserving essential information, improves visualization, reduces storage, and enhances generalization.
- **Feature Importance**: Identify critical features through decision tree splits, linear model coefficients, or dedicated importance metrics. Guides feature selection and engineering decisions while improving model interpretability.

### Labels

Labels are correct outputs for supervised learning. Classification labels are categories while regression labels are numbers. Labels come from human annotation, historical data, or measurement. Label quality affects model performance. Accurate labels produce accurate models. Noisy labels produce unreliable models. Missing labels prevent supervised learning. You need labels for training and evaluating on labeled test data.

- **Labeling Strategies**: Different problems require different approaches. Binary classification uses two mutually exclusive classes (spam/not spam). Multi-class uses many distinct classes (image categories). Multi-label allows multiple classes per example (article tags). Regression uses continuous numeric values (prices, scores). Ordinal has ordered categories (ratings). Choose the strategy matching your problem structure.
- **Label Distribution**: Balanced datasets have equal class representation. Imbalanced datasets bias toward majority classes, achieving useless high accuracy. Handle through resampling (oversample/undersample), class weights, or metrics (precision, recall, F1, AUC) instead of accuracy.
- **Label Annotation**: Create ground truth using human annotators with clear guidelines. Use multiple annotators to check agreement (Cohen's kappa). Apply expert review and automated validation. Quality control includes audits and feedback loops.
- **Label Quality**: Poor label quality directly causes poor performance. Use robust algorithms, label smoothing, weak supervision, active learning, semi-supervised learning, or transfer learning to reduce labeling costs while maintaining performance.
- **Label Storage**: Store labels alongside features in databases or file systems with version control tracking changes over time. Use annotation tools for efficient workflows, validation pipelines for consistency checks, and augmentation techniques to create additional labeled examples through transformations. Proper management ensures data quality and enables reproducible research.

### Training

Training builds a model from data by examining examples, adjusting internal parameters, and minimizing prediction errors. Training continues until performance stops improving. Training requires computation that scales with data size and model complexity. More data means more computation. Complex models need more time while simple models train faster. You balance model complexity with training time based on your resources.

- **Data Splitting**: Split training data to evaluate generalization. Common splits: 80% train / 20% test, or 70% train / 15% validation / 15% test. Validation tunes hyperparameters; test evaluates final performance once. Use stratified splitting to maintain class distribution, or time-based splitting for temporal data. Separation prevents data leakage and provides unbiased estimates. Never use test data for training or hyperparameter tuning.

\`\`\`python
# Data Splitting Example
from sklearn.model_selection import train_test_split
import numpy as np

X = np.array([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]])
y = np.array([0, 1, 0, 1, 0])

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.4, random_state=42
)
print("Training size: " + str(len(X_train)) + ", Test size: " + str(len(X_test)))
# Result: Training size: 3, Test size: 2
\`\`\`

\`\`\`sql
-- NeuronDB: Data Splitting
CREATE TEMP TABLE customer_data AS
SELECT generate_series(1, 10) AS customer_id, random() * 1000 AS value;

WITH numbered_data AS (
    SELECT *, ROW_NUMBER() OVER (ORDER BY customer_id) as row_num,
           COUNT(*) OVER () as total_count
    FROM customer_data
)
SELECT 
    customer_id,
    CASE 
        WHEN row_num <= CEIL(total_count * 0.8) THEN 'train'
        ELSE 'test'
    END AS split
FROM numbered_data
ORDER BY customer_id;

-- Result:
--  customer_id | split
-- -------------+-------
--            1 | train
--            2 | train
--            3 | train
--            4 | train
--            5 | train
--            6 | train
--            7 | train
--            8 | train
--            9 | test
--           10 | test
-- (10 rows)
\`\`\`
- **Training Iterations**: Training happens in epochs where one epoch processes all training data once. Multiple epochs improve performance but too many cause overfitting. Early stopping monitors validation performance and stops when it degrades, preventing overfitting while saving computation time.
- **Optimization Algorithms**: Minimize loss functions using gradient descent (full dataset, slow), stochastic gradient descent (random batches, faster), mini-batch gradient descent (balanced), or Adam (momentum + adaptive learning rates). Choose optimizer matching your problem and model type.
- **Loss Functions**: Measure prediction errors and guide updates. Mean squared error (regression, emphasizes large errors), mean absolute error (treats all equally), cross-entropy (classification, probabilistic outputs), or focal loss (class imbalance). Must match problem type and goals.
- **Batch Processing**: Group examples for efficient parallel computation. Large batches use more memory but provide stable gradients; small batches update frequently with more variance. Mini-batch balances stability and efficiency. Batch normalization standardizes inputs within batches.
- **Learning Rate**: Controls optimization step size, the most critical hyperparameter. High rates converge faster but may overshoot; low rates converge slowly but precisely. Use learning rate schedules (decay, warmup, cyclical) or adaptive methods (Adam) that adjust rates automatically per parameter.
- **Backpropagation**: Calculates gradients by propagating errors backward through networks using chain rule. Forward pass computes predictions; backward pass computes gradients for all parameters. Enables deep network training and is computed automatically by modern frameworks.
- **Hyperparameter Tuning**: Find optimal hyperparameters (learning rate, batch size, regularization, architecture) through grid search (all combinations, expensive), random search (random samples, faster), or Bayesian optimization (probabilistic guidance). Proper tuning significantly improves performance.
- **Gradient Management**: Stabilize training with gradient clipping (limits magnitude), gradient scaling (mixed precision), or gradient accumulation (simulates larger batches). Essential for deep and recurrent networks suffering from vanishing or exploding gradients.
- **Checkpointing and Monitoring**: Save model states at regular intervals for recovery and model selection. Resume from checkpoints if interrupted. Select best checkpoint based on validation performance. Use TensorBoard or similar tools to visualize metrics (loss curves, learning rates) and detect issues early (overfitting, underfitting, instability).

### Testing

Testing evaluates model performance using data not seen during training. The model makes predictions that you compare to correct answers, then calculate accuracy or error metrics. Testing reveals generalization ability. A model might memorize training data but testing shows if it works on new data. Good models perform well on test data while bad models fail on test data.

- **Test Set Separation**: Test sets must remain completely separate from training and validation. Never use test data for training, hyperparameter tuning, or model selection. Use exclusively for final evaluation after all development is complete.
- **Evaluation Metrics**: Classification: accuracy, precision, recall, F1 score, AUC-ROC. Regression: MSE, MAE, R-squared, RMSE. Choose metrics matching business goals.
- **Cross-Validation**: K-fold splits data into k folds, trains on k-1 and tests on remaining, rotating until all folds serve as test sets. Stratified maintains class distribution. Averaging reduces variance and helps detect overfitting.
- **Confusion Matrices**: Show classification performance with true positives, false positives, true negatives, false negatives for each class. Reveal which classes confuse the model and identify class imbalance effects.
- **Precision and Recall**: Precision = TP / (TP + FP) measures prediction quality (few false positives). Recall = TP / (TP + FN) measures coverage (few false negatives). Tradeoff: improving one degrades the other.
- **F1 Score**: F1 = 2 × (Precision × Recall) / (Precision + Recall) balances precision and recall. Use macro (per-class average), micro (aggregated), or weighted (class frequencies) averaging.
- **ROC Curves and AUC**: ROC plots true positive rate vs false positive rate across thresholds. AUC (0-1) summarizes performance; higher indicates better class separation. 0.5 = random, 1.0 = perfect.
- **Regression Metrics**: MSE (large error emphasis), MAE (robust to outliers), R-squared (explained variance), RMSE (original units), MAPE (relative error). Choose based on business context.
- **Statistical Testing**: Use hypothesis tests (t-tests, Mann-Whitney) to determine if performance differences are real or random. P-values indicate probability of chance results. Confidence intervals show plausible ranges.
- **Validation Strategies**: Holdout (single test set, high variance), k-fold (robust with limited data), time-based (preserves temporal order), group-based (maintains group structure), nested (inner for hyperparameters, outer for performance).

### Overfitting

Overfitting occurs when a model memorizes training data instead of learning generalizable patterns. It performs well on training data but poorly on new data. The model learns noise instead of patterns and becomes too specific to training examples. Overfitting happens with complex models and small datasets. Complex models can memorize details while small datasets lack diversity. The solution involves regularization, more data, or simpler models.

![Overfitting Diagram](/tutorials/ai-tutorial-01-introduction/diagram-overfitting.svg)

The diagram shows good fit versus overfitted models. Good fit models generalize well to new data with consistent performance on both training and test sets. Overfitted models memorize training data and fail on new data, showing high training accuracy but low test accuracy. Good fit models achieve balanced performance around 82-85% on both sets. Overfitted models may achieve 98% training accuracy but only 45% test accuracy. Solutions include regularization, more training data, simpler models, cross-validation, and early stopping.

- **Bias-Variance Tradeoff**: High bias means underfitting (too simple, misses patterns, poor on both train/test). High variance means overfitting (too complex, learns noise, good train/poor test). Balance bias and variance for optimal performance. Optimal complexity depends on data size, quality, and noise level.
- **Regularization Techniques**: Reduce overfitting by limiting complexity and preventing large weights. L1 adds absolute penalties (encourages sparsity, feature selection). L2 adds squared penalties (shrinks weights, stabilizes training). Elastic net combines L1 and L2. Tune regularization strength; too much causes underfitting, too little allows overfitting.
- **Neural Network Regularization**: Dropout randomly disables neurons (rates 0.2-0.5), forcing redundant representations. Batch normalization normalizes layer inputs, stabilizing learning and allowing higher learning rates. Weight decay penalizes large weights (equivalent to L2). Layer normalization benefits sequence models. Data augmentation also acts as regularization.
- **Data Augmentation**: Create more examples via transformations: images (rotate, flip, crop, brightness, noise), text (paraphrase, translate, synonyms), audio (noise, speed, filters). Increases diversity, improves generalization, valuable with limited data. Use transformations preserving semantic meaning while reflecting realistic production variations.
- **Learning Curves**: Plot training and validation performance over epochs. Gaps indicate overfitting (train improves while validation degrades). Convergence suggests sufficient training (both plateau at similar levels). Divergence suggests overfitting. Guide early stopping decisions and reveal needs for more data, different complexity, or better regularization.
- **Data Size and Quality**: Small datasets prone to overfitting (models memorize easily). Large datasets reduce risk (diverse patterns prevent memorization). Quality matters more than quantity. Poor quality (noise, errors, bias) leads to poor models regardless of size. Diverse, balanced, representative data essential. Diminishing returns on more data.
- **Ensemble Methods**: Combine multiple models, averaging predictions to reduce variance. Bagging trains on different subsets (bootstrap sampling, reduces variance). Random forests use bagging. Boosting trains sequentially to correct errors (reduces bias and variance). Stacking uses meta-learner. Most effective for reducing overfitting.
- **Model Simplification**: Pruning removes unnecessary parts: decision trees (remove branches), neural networks (remove connections/neurons with low importance). Knowledge distillation trains smaller models to mimic larger. Quantization reduces precision. Creates simpler models that generalize better, faster, use less memory, easier to deploy.
- **Early Stopping**: Monitor validation performance, stop when it degrades, preventing overfitting automatically. Saves best checkpoint based on validation. Patience parameters control wait time. Detects overfitting when validation plateaus/degrades while training continues improving. Effective for neural networks with many epochs.
- **Regularization Strategies**: Combine multiple strategies: appropriate model complexity, regularization (L1, L2, dropout), data augmentation, learning curve monitoring, cross-validation, ensemble methods, early stopping. Experiment with combinations to find what works best for your problem, data, and constraints.

## Machine Learning Workflow

The machine learning process follows a systematic workflow from problem definition through deployment and monitoring. Each stage builds upon the previous one, requiring careful planning and execution to achieve successful results. Understanding this workflow helps you structure your machine learning projects effectively and avoid common pitfalls.

![Machine Learning Workflow Diagram](/tutorials/ai-tutorial-01-introduction/diagram-ml-workflow.svg)

The workflow begins with clearly defining what you want to achieve, then progresses through data collection, preparation, algorithm selection, training, evaluation, and finally deployment. Each stage has specific goals, challenges, and best practices that contribute to the overall success of your machine learning project.

### Problem Definition

Start by defining what you want to predict and why it matters. Is it classification or regression? What are the inputs and outputs? What does success look like? Define metrics to measure success. Clear problem definition guides everything else by determining data needs, selecting appropriate algorithms, and defining evaluation methods. Vague problems lead to vague solutions.

Consider business context and constraints. What decisions will the model inform? What are acceptable error rates? What resources are available? Understanding these factors early prevents wasted effort and ensures the solution addresses real needs. Document assumptions, success criteria, and constraints explicitly.

### Data Collection

Gather examples relevant to your problem from various sources. Databases store historical records, APIs provide real-time information, sensors capture measurements, and surveys collect responses. More data usually improves results, but data must represent real-world scenarios accurately. Biased data produces biased models while diverse data produces robust models.

Assess data quality and availability early. Check data completeness, accuracy, and relevance. Identify potential data sources and evaluate their reliability. Consider data privacy and compliance requirements. Plan for data collection timelines and costs. Establish data governance practices to ensure consistency and quality.

### Data Preparation

Raw data needs preparation before use. Handle missing values through removal, imputation, or prediction. Remove or transform outliers depending on context. Normalize features to make different ranges comparable. Split into training, validation, and testing sets. Preparation quality directly affects model performance.

Feature engineering transforms raw data into useful features. Create interaction features, polynomial features, time-based features, and text features. Feature selection reduces dimensionality and noise. Data cleaning removes errors and inconsistencies. Proper preparation requires domain knowledge and iterative refinement.

### Algorithm Selection

Choose an algorithm matching your problem type and data characteristics. Classification problems use classification algorithms; regression problems use regression algorithms. Linear models assume linear relationships, are simple and interpretable, and work well with many features. Non-linear models capture complex patterns but need more data and are harder to interpret.

Consider algorithm assumptions, computational requirements, and interpretability needs. Some algorithms require specific data formats or preprocessing. Evaluate multiple algorithms to find the best fit. Use cross-validation to compare algorithm performance fairly. Consider ensemble methods that combine multiple algorithms.

### Model Training

Training finds optimal parameters by processing training data, adjusting parameters to minimize errors, and stopping when performance plateaus or time limits are reached. Training requires continuous monitoring to watch for overfitting, track performance metrics, adjust hyperparameters when needed, and use early stopping to prevent overfitting.

Monitor training progress through learning curves and validation metrics. Adjust hyperparameters like learning rate, batch size, and regularization strength. Use techniques like gradient clipping and learning rate scheduling to stabilize training. Save model checkpoints regularly for recovery and model selection.

### Evaluation

Evaluation measures model quality using held-out test data with metrics like accuracy, precision, recall, or mean squared error. Multiple metrics provide different views: accuracy shows overall correctness, precision shows prediction quality, and recall shows coverage. Choose metrics matching your business goals.

Use cross-validation for robust evaluation with limited data. Analyze confusion matrices to understand classification errors. Plot ROC curves and precision-recall curves to visualize performance. Compare models using statistical significance tests. Document evaluation results and limitations.

### Deployment

Deployment puts the model into production where it processes real inputs and produces predictions. Deployed models need ongoing maintenance because data distributions change over time and models degrade. Regular retraining keeps performance high while monitoring detects issues early and triggers interventions.

Set up monitoring systems to track prediction quality, latency, and resource usage. Implement logging to capture inputs, outputs, and errors. Create alerting for performance degradation or anomalies. Plan for model updates and versioning. Establish rollback procedures for problematic deployments.

## Common Algorithms

### Linear Regression

Linear regression predicts continuous values by assuming a linear relationship between features and target. The model equation is y = wx + b where w represents weights and b represents bias. Training finds optimal weights and bias values that minimize prediction errors, making predictions through this simple equation. Linear regression works well when relationships are approximately linear, needs feature scaling for best results, handles many features efficiently, and is simple and interpretable.

\`\`\`python
# Linear Regression Example
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[1500, 2], [2000, 3], [2500, 4], [1800, 3]])
y = np.array([250000, 350000, 450000, 300000])

model = LinearRegression()
model.fit(X, y)
price = model.predict([[2200, 3]])
print("Predicted price: $" + str(int(price[0])))
# Result: Predicted price: $380000
\`\`\`

\`\`\`sql
-- NeuronDB: Linear Regression
CREATE TEMP TABLE sales_data AS
SELECT * FROM (VALUES 
    (1500, 2, 250000), (2000, 3, 350000),
    (2500, 4, 450000), (1800, 3, 300000)
) AS t(square_feet, bedrooms, price);

CREATE TEMP TABLE reg_model AS
SELECT neurondb.train(
    'default',
    'linear_regression',
    'sales_data',
    'price',
    ARRAY['square_feet', 'bedrooms'],
    '{}'::jsonb
)::integer AS model_id;

SELECT neurondb.predict(
    (SELECT model_id FROM reg_model),
    ARRAY[2200::NUMERIC, 3::NUMERIC]
) AS predicted_price;
\`\`\`

\`\`\`
 predicted_price
-----------------
      380000.00
(1 row)
\`\`\`

### Logistic Regression

Logistic regression predicts probabilities as values between zero and one using a sigmoid function, which you can convert to binary classifications by choosing a threshold, typically 0.5. Despite the name, logistic regression is a classification algorithm that predicts class membership probabilities. It is interpretable, shows feature importance directly, works well with linearly separable classes, and needs feature scaling for optimal performance.

\`\`\`python
# Logistic Regression Example
from sklearn.linear_model import LogisticRegression
import numpy as np

X = np.array([[25, 30000], [35, 50000], [45, 80000], [30, 40000]])
y = np.array([0, 1, 1, 0])

model = LogisticRegression()
model.fit(X, y)
prediction = model.predict([[40, 60000]])
print("Loan approved: " + str(prediction[0]))
# Result: Loan approved: 1
\`\`\`

\`\`\`sql
-- NeuronDB: Logistic Regression
CREATE TEMP TABLE loan_data AS
SELECT * FROM (VALUES 
    (25, 30000, false), (35, 50000, true),
    (45, 80000, true), (30, 40000, false)
) AS t(age, income, approved);

CREATE TEMP TABLE logreg_model AS
SELECT neurondb.train(
    'default',
    'logistic_regression',
    'loan_data',
    'approved',
    ARRAY['age', 'income'],
    '{"max_iters": 1000}'::jsonb
)::integer AS model_id;

SELECT neurondb.predict(
    (SELECT model_id FROM logreg_model),
    ARRAY[40::NUMERIC, 60000::NUMERIC]
) AS prediction;
-- Result:
--  prediction
-- -----------
--  t
-- (1 row)
\`\`\`

### Decision Trees

Decision trees make decisions through hierarchical branching where each node tests a feature and branches lead to predictions or more tests. Trees are easy to understand and visualize, handle non-linear relationships, work with mixed data types, show which features matter most, but can overfit easily without proper regularization.

![Decision Tree Diagram](/tutorials/ai-tutorial-01-introduction/diagram-decision-tree.svg)

Decision trees make predictions by following a path from root to leaf. Each internal node tests a feature condition. Branches represent test outcomes. Leaf nodes contain final predictions or class labels. For new examples, start at the root, follow branches based on feature values, reach a leaf node, and use the class or value in that leaf. Trees are interpretable because you can trace the decision path.

\`\`\`python
# Decision Tree Example
from sklearn.tree import DecisionTreeClassifier
import numpy as np

X = np.array([[1, 2], [2, 3], [3, 4], [4, 5]])
y = np.array([0, 0, 1, 1])

model = DecisionTreeClassifier()
model.fit(X, y)
prediction = model.predict([[2.5, 3.5]])
print("Class: " + str(prediction[0]))
# Result: Class: 0
\`\`\`

\`\`\`sql
-- NeuronDB: Decision Tree
CREATE TEMP TABLE tree_data AS
SELECT * FROM (VALUES 
    (1, 2, 0), (2, 3, 0), (3, 4, 1), (4, 5, 1)
) AS t(feature1, feature2, label);

CREATE TEMP TABLE tree_model AS
SELECT neurondb.train(
    'default',
    'decision_tree',
    'tree_data',
    'label',
    ARRAY['feature1', 'feature2'],
    '{"max_depth": 3}'::jsonb
)::integer AS model_id;

SELECT neurondb.predict(
    (SELECT model_id FROM tree_model),
    ARRAY[2.5::NUMERIC, 3.5::NUMERIC]
) AS prediction;
-- Result:
--  prediction
-- -----------
--  0
-- (1 row)
\`\`\`

### Random Forests

Random forests combine many decision trees where each tree sees different data through bootstrap sampling, and predictions come from voting or averaging across all trees. They reduce overfitting compared to single trees, are robust to missing values, work well with many features, provide feature importance scores, but are harder to interpret than single trees.

\`\`\`python
# Random Forest Example
from sklearn.ensemble import RandomForestClassifier
import numpy as np

X = np.array([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]])
y = np.array([0, 0, 1, 1, 1])

model = RandomForestClassifier(n_estimators=10, random_state=42)
model.fit(X, y)
prediction = model.predict([[3.5, 4.5]])
print("Class: " + str(prediction[0]))
# Result: Class: 1
\`\`\`

\`\`\`sql
-- NeuronDB: Random Forest
CREATE TEMP TABLE rf_data AS
SELECT * FROM (VALUES 
    (1, 2, 0), (2, 3, 0), (3, 4, 1), (4, 5, 1), (5, 6, 1)
) AS t(feature1, feature2, label);

CREATE TEMP TABLE rf_model AS
SELECT neurondb.train(
    'default',
    'random_forest',
    'rf_data',
    'label',
    ARRAY['feature1', 'feature2'],
    '{"n_trees": 10}'::jsonb
)::integer AS model_id;

SELECT neurondb.predict(
    (SELECT model_id FROM rf_model),
    ARRAY[3.5::NUMERIC, 4.5::NUMERIC]
) AS prediction;
-- Result:
--  prediction
-- -----------
--  1
-- (1 row)
\`\`\`

### Neural Networks

Neural networks are inspired by biological brains with layers of connected nodes where each connection has a weight that training adjusts to learn patterns. They can learn complex non-linear patterns, work effectively with images, text, and signals, but require substantial data and computation resources, and are hard to interpret compared to simpler models.

![Neural Network Diagram](/tutorials/ai-tutorial-01-introduction/diagram-neural-network.svg)

Neural networks consist of layers of connected nodes. The input layer receives features. Hidden layers process information through weighted connections and activation functions. The output layer produces predictions. Each connection has a weight that training adjusts to minimize prediction errors. Activation functions like ReLU, sigmoid, and tanh introduce non-linearity. Training uses backpropagation to compute gradients and optimizers to update weights. Multiple epochs improve performance. More layers enable learning complex patterns.

\`\`\`python
# Neural Network Example
from sklearn.neural_network import MLPClassifier
import numpy as np

X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([0, 1, 1, 0])

model = MLPClassifier(hidden_layer_sizes=(4,), max_iter=1000)
model.fit(X, y)
prediction = model.predict([[0.5, 0.5]])
print("Prediction: " + str(prediction[0]))
# Result: Prediction: 0
\`\`\`

\`\`\`sql
-- NeuronDB: Neural Network
CREATE TEMP TABLE nn_data AS
SELECT * FROM (VALUES 
    (0, 0, 0), (0, 1, 1), (1, 0, 1), (1, 1, 0)
) AS t(input1, input2, label);

CREATE TEMP TABLE nn_model AS
SELECT neurondb.train(
    'default',
    'neural_network',
    'nn_data',
    'label',
    ARRAY['input1', 'input2'],
    '{"hidden_layers": [4], "max_iters": 1000}'::jsonb
)::integer AS model_id;

SELECT neurondb.predict(
    (SELECT model_id FROM nn_model),
    ARRAY[0.5::NUMERIC, 0.5::NUMERIC]
) AS prediction;
-- Result:
--  prediction
-- -----------
--  0
-- (1 row)
\`\`\`

## Applications

Machine learning appears in many applications:

- **Email Filters**: Classify messages automatically
- **Recommendation Systems**: Suggest products based on user preferences
- **Image Recognition**: Identify objects in images
- **Speech Recognition**: Convert audio to text
- **Medical Diagnosis**: Aid doctors with clinical decisions
- **Autonomous Vehicles**: Navigate roads safely

### Email Filtering

- Uses classification algorithms
- The system learns from labeled emails
- It identifies spam patterns
- It filters unwanted messages automatically

### Recommendation Systems

- Use collaborative filtering techniques
- They find users with similar preferences
- They suggest items liked by similar users
- They improve with more usage data

### Image Recognition

- Uses deep learning architectures
- Convolutional neural networks process pixels
- They learn visual features automatically
- They identify objects in images accurately

### Speech Recognition

- Converts audio signals to text
- Recurrent neural networks process sequences
- They learn speech patterns from data
- They transcribe spoken words effectively

### Medical Diagnosis

- Assists healthcare professionals
- Systems learn from patient data
- They identify disease indicators
- They support clinical decision-making

### Autonomous Vehicles

- Navigate complex environments
- They process sensor data in real-time
- They identify obstacles and hazards
- They plan safe paths for navigation

## Python Example: Email Spam Classification

This example demonstrates supervised learning using scikit-learn to classify emails as spam or not spam based on features extracted from email content.

\`\`\`python
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix

# Sample email data
emails = [
    "Congratulations! You've won $1,000,000. Click here to claim your prize!",
    "Meeting scheduled for tomorrow at 2 PM in conference room A.",
    "Limited time offer! Buy now and save 50% on all products!",
    "Please review the attached quarterly report before the meeting.",
    "URGENT: Your account will be suspended. Verify your information immediately!",
    "The project deadline has been extended to next Friday.",
    "Free money! No deposit required. Start earning today!",
    "Reminder: Team lunch tomorrow at 12 PM in the cafeteria.",
]

# Labels: 1 = spam, 0 = not spam
labels = np.array([1, 0, 1, 0, 1, 0, 1, 0])

# Convert emails to feature vectors
vectorizer = CountVectorizer(max_features=100, stop_words='english')
features = vectorizer.fit_transform(emails)

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(
    features, labels, test_size=0.25, random_state=42, stratify=labels
)

# Train a Naive Bayes classifier
classifier = MultinomialNB()
classifier.fit(X_train, y_train)

# Make predictions on test set
y_pred = classifier.predict(X_test)

# Evaluate performance
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred)
recall = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)
cm = confusion_matrix(y_test, y_pred)

# Formulas for metrics:
# Accuracy = (TP + TN) / (TP + TN + FP + FN)
# Precision = TP / (TP + FP)
# Recall = TP / (TP + FN)
# F1 = 2 * (Precision * Recall) / (Precision + Recall)

print("Accuracy: " + str(round(accuracy, 2)))
print("Precision: " + str(round(precision, 2)))
print("Recall: " + str(round(recall, 2)))
print("F1 Score: " + str(round(f1, 2)))
print("Confusion Matrix:")
print(cm)

# Test with new email
new_email = ["Win a free vacation! Click now to enter the contest!"]
new_features = vectorizer.transform(new_email)
prediction = classifier.predict(new_features)
prediction_text = "Spam" if prediction[0] == 1 else "Not Spam"
print("New email prediction: " + prediction_text)
# Result:
# Accuracy: 1.00
# Precision: 1.00
# Recall: 1.00
# F1 Score: 1.00
# Confusion Matrix:
# [[1 0]
#  [0 1]]
#
# New email prediction: Spam
\`\`\`

### Customer Segmentation

This example demonstrates unsupervised learning using NeuronDB's built-in machine learning capabilities to segment customers based on their purchasing behavior.

\`\`\`sql
-- Create a table with customer purchase data
CREATE TABLE customer_purchases (
    customer_id SERIAL PRIMARY KEY,
    total_spent NUMERIC,
    num_orders INTEGER,
    avg_order_value NUMERIC,
    days_since_last_purchase INTEGER,
    product_category_count INTEGER
);

-- Insert sample customer data
INSERT INTO customer_purchases (total_spent, num_orders, avg_order_value, days_since_last_purchase, product_category_count)
VALUES
    (1250.50, 15, 83.37, 5, 8),
    (450.25, 8, 56.28, 45, 3),
    (3200.75, 32, 100.02, 2, 12),
    (180.00, 4, 45.00, 120, 2),
    (890.50, 12, 74.21, 15, 6),
    (2150.25, 20, 107.51, 8, 10),
    (350.75, 7, 50.11, 60, 4),
    (125.00, 3, 41.67, 90, 1);

-- Prepare features for clustering (normalize the data)
CREATE TABLE customer_features AS
SELECT 
    customer_id,
    (total_spent - AVG(total_spent) OVER ()) / NULLIF(STDDEV(total_spent) OVER (), 0) AS total_spent_normalized,
    (num_orders - AVG(num_orders) OVER ()) / NULLIF(STDDEV(num_orders) OVER (), 0) AS num_orders_normalized,
    (avg_order_value - AVG(avg_order_value) OVER ()) / NULLIF(STDDEV(avg_order_value) OVER (), 0) AS avg_order_value_normalized,
    (days_since_last_purchase - AVG(days_since_last_purchase) OVER ()) / NULLIF(STDDEV(days_since_last_purchase) OVER (), 0) AS days_since_last_purchase_normalized
FROM customer_purchases;

-- Perform k-means clustering to segment customers into 3 groups
SELECT 
    customer_id,
    total_spent,
    num_orders,
    days_since_last_purchase,
    neurondb_kmeans_cluster(
        ARRAY[
            total_spent_normalized,
            num_orders_normalized,
            avg_order_value_normalized,
            days_since_last_purchase_normalized
        ],
        3  -- number of clusters
    ) AS cluster_id
FROM customer_features;

-- Analyze cluster characteristics
WITH clustered_customers AS (
    SELECT 
        cp.customer_id,
        cp.total_spent,
        cp.num_orders,
        cp.days_since_last_purchase,
        neurondb_kmeans_cluster(
            ARRAY[
                (cp.total_spent - AVG(cp.total_spent) OVER ()) / NULLIF(STDDEV(cp.total_spent) OVER (), 0),
                (cp.num_orders - AVG(cp.num_orders) OVER ()) / NULLIF(STDDEV(cp.num_orders) OVER (), 0),
                (cp.avg_order_value - AVG(cp.avg_order_value) OVER ()) / NULLIF(STDDEV(cp.avg_order_value) OVER (), 0),
                (cp.days_since_last_purchase - AVG(cp.days_since_last_purchase) OVER ()) / NULLIF(STDDEV(cp.days_since_last_purchase) OVER (), 0)
            ],
            3
        ) AS cluster_id
    FROM customer_purchases cp
)
SELECT 
    cluster_id,
    COUNT(*) AS customer_count,
    AVG(total_spent) AS avg_total_spent,
    AVG(num_orders) AS avg_num_orders,
    AVG(days_since_last_purchase) AS avg_days_since_last_purchase,
    CASE 
        WHEN AVG(total_spent) > 1500 THEN 'High Value'
        WHEN AVG(total_spent) > 500 THEN 'Medium Value'
        ELSE 'Low Value'
    END AS segment_type
FROM clustered_customers
GROUP BY cluster_id
        ORDER BY cluster_id;
-- Result:
--  customer_id | total_spent | num_orders | days_since_last_purchase | cluster_id
-- -------------+-------------+------------+--------------------------+------------
--            1 |     1250.50 |         15 |                        5 |          0
--            2 |      450.25 |          8 |                       45 |          1
--            3 |     3200.75 |         32 |                        2 |          0
--            4 |      180.00 |          4 |                      120 |          2
--            5 |      890.50 |         12 |                       15 |          1
--            6 |     2150.25 |         20 |                        8 |          0
--            7 |      350.75 |          7 |                       60 |          2
--            8 |      125.00 |          3 |                       90 |          2
-- (8 rows)
--
--  cluster_id | customer_count | avg_total_spent | avg_num_orders | avg_days_since_last_purchase | segment_type
-- ------------+----------------+-----------------+----------------+------------------------------+--------------
--           0 |              3 |         2200.50 |          22.33 |                         5.00 | High Value
--           1 |              2 |          670.38 |          10.00 |                        30.00 | Medium Value
--           2 |              3 |          218.58 |           4.67 |                        90.00 | Low Value
-- (3 rows)
\`\`\`

## Summary

Machine learning enables computers to learn patterns from data without explicit programming. The field divides into three paradigms: supervised learning uses labeled examples to predict outcomes, unsupervised learning discovers hidden patterns in unlabeled data, and reinforcement learning optimizes actions through environmental feedback. The workflow progresses from problem definition through data collection, preparation, algorithm selection, training, evaluation, and deployment. Common algorithms range from simple linear models to complex neural networks, each suited to different problem types and data characteristics. Key concepts include feature engineering, label quality, training optimization, test set separation, and overfitting prevention through regularization. Applications span email filtering, recommendation systems, medical diagnosis, fraud detection, autonomous vehicles, and natural language processing. Success requires balancing model complexity with data size, choosing appropriate evaluation metrics, and continuously monitoring performance in production.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Scikit-learn User Guide](https://scikit-learn.org/stable/user_guide.html)
- [Machine Learning Course by Andrew Ng](https://www.coursera.org/learn/machine-learning)
- [Deep Learning Book](https://www.deeplearningbook.org/)
- [Hands-On Machine Learning](https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/)
- [Pattern Recognition and Machine Learning](https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf)
`
}

function getDefaultTutorialContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return `
## Overview

${tutorial.excerpt}

This tutorial is coming soon. Check back later for complete content.
`
}

export default function TutorialPage({ params }: { params: { slug: string } }) {
  const tutorial = tutorials.find((t) => t.slug === params.slug)

  if (!tutorial) {
    notFound()
  }

  const levelColors: Record<string, string> = {
    'Beginner': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Intermediate': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Advanced': 'bg-red-500/20 text-red-400 border-red-500/30',
  }

  // Generate markdown content based on tutorial slug
  const content = tutorial.slug === 'ai-tutorial-01-introduction' 
    ? getIntroductionTutorialContent(tutorial, tutorials)
    : getDefaultTutorialContent(tutorial, tutorials)

  const markdown = `${content}

## Related Tutorials

${tutorial.order > 1 ? `- [Previous: ${tutorials.find(t => t.order === tutorial.order - 1)?.title}](/tutorials/${tutorials.find(t => t.order === tutorial.order - 1)?.slug})` : ''}
${tutorial.order < tutorials.length ? `- [Next: ${tutorials.find(t => t.order === tutorial.order + 1)?.title}](/tutorials/${tutorials.find(t => t.order === tutorial.order + 1)?.slug})` : ''}
- [All Tutorials](/tutorials)
`

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1f2937' }}>
      {/* Header Hero Section */}
      <div className="border-b border-slate-700 pt-20" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/tutorials"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tutorials
          </Link>
          
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${levelColors[tutorial.level]}`}>
                  {tutorial.level}
                </span>
                <span className="text-sm text-white/70">Tutorial {tutorial.order}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{tutorial.title}</h1>
              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{tutorial.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(tutorial.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{tutorial.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <BlogMarkdown>{markdown}</BlogMarkdown>
      </div>

      <FooterTemplate />
    </div>
  )
}
