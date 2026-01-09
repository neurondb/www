#!/bin/bash

# SEO Setup Checklist Script
# Run this to check your SEO implementation status

echo "=================================="
echo "NeuronDB SEO Status Checker"
echo "=================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check 1: Google Search Console Verification
echo "1. Checking Google Search Console Verification..."
if grep -q "NEXT_PUBLIC_GOOGLE_VERIFICATION" .env.local 2>/dev/null; then
    if [ -s .env.local ] && grep "NEXT_PUBLIC_GOOGLE_VERIFICATION=." .env.local | grep -v "NEXT_PUBLIC_GOOGLE_VERIFICATION=$" >/dev/null 2>&1; then
        echo -e "   ${GREEN}✓${NC} Google verification code is set"
    else
        echo -e "   ${RED}✗${NC} Google verification code is empty or not set"
        echo -e "   ${YELLOW}Action: Add your verification code to .env.local${NC}"
    fi
else
    echo -e "   ${RED}✗${NC} .env.local not found or verification not configured"
    echo -e "   ${YELLOW}Action: Create .env.local and add NEXT_PUBLIC_GOOGLE_VERIFICATION${NC}"
fi

echo ""

# Check 2: Sitemap Accessibility
echo "2. Checking Sitemap Accessibility..."
if curl -s -o /dev/null -w "%{http_code}" "https://neurondb.ai/sitemap.xml" | grep -q "200"; then
    echo -e "   ${GREEN}✓${NC} Sitemap is accessible at https://neurondb.ai/sitemap.xml"
else
    echo -e "   ${YELLOW}⚠${NC} Sitemap check - site may not be deployed or accessible"
fi

echo ""

# Check 3: robots.txt
echo "3. Checking robots.txt..."
if curl -s -o /dev/null -w "%{http_code}" "https://neurondb.ai/robots.txt" | grep -q "200"; then
    echo -e "   ${GREEN}✓${NC} robots.txt is accessible"
else
    echo -e "   ${YELLOW}⚠${NC} robots.txt check - site may not be deployed"
fi

echo ""

# Check 4: Google Indexing (basic check)
echo "4. Checking Google Indexing Status..."
echo -e "   ${YELLOW}ℹ${NC} Manual check required:"
echo "   Visit: https://www.google.com/search?q=site:neurondb.ai"
echo "   If you see results, your site is indexed"

echo ""

# Check 5: Page Speed
echo "5. Checking PageSpeed..."
echo -e "   ${YELLOW}ℹ${NC} Test your site speed at:"
echo "   https://pagespeed.web.dev/analysis?url=https://neurondb.ai"

echo ""

# Check 6: Structured Data
echo "6. Checking Structured Data..."
echo -e "   ${YELLOW}ℹ${NC} Validate structured data at:"
echo "   https://search.google.com/test/rich-results?url=https://neurondb.ai"

echo ""
echo "=================================="
echo "Quick Action Checklist"
echo "=================================="
echo ""
echo "Priority 1 (DO NOW):"
echo "  [ ] 1. Go to https://search.google.com/search-console"
echo "  [ ] 2. Add property for neurondb.ai"
echo "  [ ] 3. Get verification code and add to .env.local"
echo "  [ ] 4. Redeploy site"
echo "  [ ] 5. Complete verification in Search Console"
echo ""
echo "Priority 2 (AFTER VERIFICATION):"
echo "  [ ] 1. Submit sitemap in Search Console"
echo "  [ ] 2. Request indexing for homepage"
echo "  [ ] 3. Request indexing for /blog/postgresql-vector-database"
echo "  [ ] 4. Request indexing for /docs"
echo ""
echo "Priority 3 (ONGOING):"
echo "  [ ] 1. Create comparison content (NeuronDB vs pgvector)"
echo "  [ ] 2. Build backlinks (submit to directories)"
echo "  [ ] 3. Share content on social media"
echo "  [ ] 4. Monitor Search Console weekly"
echo ""
echo "=================================="
echo "Next Steps"
echo "=================================="
echo ""
echo "1. Read: SEO_IMPROVEMENT_GUIDE.md for detailed instructions"
echo "2. Create/update .env.local with verification code"
echo "3. Visit Google Search Console to get started"
echo ""
echo "Questions? Check the FAQ section in SEO_IMPROVEMENT_GUIDE.md"
echo ""

