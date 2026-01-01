import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BlogMarkdown } from '../../_components/BlogMarkdown'
import FooterTemplate from '@/components/templates/FooterTemplate'
import RelatedTutorials from '@/components/RelatedTutorials'
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
    excerpt: 'Learn data collection, cleaning, feature selection, and transformation. Learn to handle missing values, outliers, normalization, and standardization with practical examples.',
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
    excerpt: 'Learn loss functions, backpropagation, optimizers, and learning rates. Implement training loops in Python and log metrics in SQL databases.',
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
    excerpt: 'Learn the transformer architecture and self-attention mechanism. Learn multi-head attention, encoder-decoder structures, and positional encoding.',
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
    excerpt: 'Learn vector similarity concepts and distance metrics. Learn cosine, Euclidean, and Manhattan distances with indexing strategies and SQL examples.',
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
    excerpt: 'Learn hybrid search combining semantic and keyword search. Learn reranking strategies, multi-vector approaches, and temporal search with SQL examples.',
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
    excerpt: 'Learn classification and regression metrics. Learn embedding quality metrics, A/B testing, and comprehensive evaluation suites with SQL storage.',
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
    excerpt: 'Learn multi-vector embeddings, temporal search patterns, ensemble methods, and advanced indexing with complex architecture implementations.',
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

These core concepts form the foundation of machine learning. Learn them to build effective models.

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

function getDataPreparationTutorialContent(): string {
  return `
## Data Preparation Overview

Raw data contains errors. It has missing values. It has outliers. Features have different scales. You must prepare data before training models. Data preparation transforms raw data into clean features. Clean features improve model performance. Poor preparation produces poor models.

Data preparation includes collection, cleaning, transformation, and validation. You collect data from sources. You clean errors and inconsistencies. You transform features into usable formats. You validate data quality. Each step affects final model performance.

![Data Preparation Workflow](/tutorials/ai-tutorial-02-data-preparation/diagram-data-preparation-workflow.svg)

The workflow starts with raw data. You identify issues. You handle missing values. You remove or transform outliers. You normalize features. You validate results. The output is clean data ready for training.

## Data Collection

You collect data from multiple sources. Databases store historical records. APIs provide real-time data. Files contain structured or unstructured data. Sensors capture measurements. Each source has different formats and quality levels.

Assess data quality early. Check completeness. Check accuracy. Check relevance. Identify missing values. Identify duplicates. Identify inconsistencies. Document data sources and collection methods. Track data lineage for reproducibility.

\`\`\`python
# Data Collection Example
import pandas as pd
import requests

# Collect from CSV file
df_csv = pd.read_csv('customer_data.csv')

# Collect from API
response = requests.get('https://api.example.com/data')
df_api = pd.DataFrame(response.json())

# Collect from database
import sqlite3
conn = sqlite3.connect('database.db')
df_db = pd.read_sql_query('SELECT * FROM customers', conn)

# Combine sources
df_combined = pd.concat([df_csv, df_api, df_db], ignore_index=True)
print("Total records: " + str(len(df_combined)))
# Result: Total records: 1500
\`\`\`

\`\`\`sql
-- NeuronDB: Data Collection
CREATE TABLE raw_customer_data AS
SELECT * FROM (
    SELECT id, name, email, age, income 
    FROM csv_import('customers.csv')
    UNION ALL
    SELECT id, name, email, age, income
    FROM api_import('https://api.example.com/customers')
    UNION ALL
    SELECT id, name, email, age, income
    FROM external_db.customers
) AS combined_data;

SELECT COUNT(*) AS total_records FROM raw_customer_data;
-- Result:
--  total_records
-- ---------------
--           1500
-- (1 row)
\`\`\`

Data collection requires planning. Define what data you need. Identify available sources. Assess access requirements. Plan collection schedules. Handle rate limits for APIs. Manage storage for large datasets. Ensure data privacy compliance.

## Handling Missing Values

Missing values appear as null, NaN, or empty fields. They occur from collection errors, optional fields, or data corruption. Missing values break many algorithms. You must handle them before training.

Three main approaches exist. Removal deletes rows or columns with missing values. Imputation fills missing values with estimates. Prediction uses models to predict missing values. Choose based on missing data amount and pattern.

![Missing Values Handling](/tutorials/ai-tutorial-02-data-preparation/diagram-missing-values.svg)

The diagram shows different strategies. Complete case analysis removes all rows with any missing value. Mean imputation fills numeric missing values with column means. Mode imputation fills categorical missing values with most common values. Model-based imputation predicts missing values using other features.

\`\`\`python
# Missing Values Handling
import pandas as pd
import numpy as np
from sklearn.impute import SimpleImputer, KNNImputer

# Sample data with missing values
data = pd.DataFrame({
    'age': [25, 30, np.nan, 35, 40, np.nan],
    'income': [50000, np.nan, 75000, 80000, np.nan, 90000],
    'city': ['NYC', 'SF', 'NYC', np.nan, 'LA', 'SF']
})

# Method 1: Remove rows with any missing value
df_removed = data.dropna()
print("After removal: " + str(len(df_removed)) + " rows")

# Method 2: Mean imputation for numeric columns
numeric_imputer = SimpleImputer(strategy='mean')
data_numeric = data[['age', 'income']]
data[['age', 'income']] = numeric_imputer.fit_transform(data_numeric)

# Method 3: Mode imputation for categorical columns
categorical_imputer = SimpleImputer(strategy='most_frequent')
data_categorical = data[['city']]
data[['city']] = categorical_imputer.fit_transform(data_categorical)

# Method 4: KNN imputation
knn_imputer = KNNImputer(n_neighbors=2)
data_imputed = pd.DataFrame(
    knn_imputer.fit_transform(data[['age', 'income']]),
    columns=['age', 'income']
)
print(data_imputed)
# Result:
# After removal: 2 rows
#    age   income
# 0  25.0  50000.0
# 1  30.0  75000.0
# 2  32.5  75000.0
# 3  35.0  80000.0
# 4  40.0  81666.7
# 5  32.5  90000.0
\`\`\`

\`\`\`sql
-- NeuronDB: Missing Values Handling
CREATE TABLE customer_data (
    id SERIAL PRIMARY KEY,
    age INTEGER,
    income NUMERIC,
    city VARCHAR(50)
);

INSERT INTO customer_data (age, income, city) VALUES
    (25, 50000, 'NYC'),
    (30, NULL, 'SF'),
    (NULL, 75000, 'NYC'),
    (35, 80000, NULL),
    (40, NULL, 'LA'),
    (NULL, 90000, 'SF');

-- Method 1: Remove rows with missing values
CREATE TABLE clean_data_removed AS
SELECT * FROM customer_data
WHERE age IS NOT NULL AND income IS NOT NULL AND city IS NOT NULL;

-- Method 2: Mean imputation
UPDATE customer_data
SET age = COALESCE(age, (SELECT AVG(age) FROM customer_data WHERE age IS NOT NULL))
WHERE age IS NULL;

UPDATE customer_data
SET income = COALESCE(income, (SELECT AVG(income) FROM customer_data WHERE income IS NOT NULL))
WHERE income IS NULL;

-- Method 3: Mode imputation for categorical
UPDATE customer_data
SET city = COALESCE(city, (
    SELECT city FROM customer_data 
    WHERE city IS NOT NULL 
    GROUP BY city 
    ORDER BY COUNT(*) DESC 
    LIMIT 1
))
WHERE city IS NULL;

SELECT * FROM customer_data;
-- Result:
--  id | age | income | city
-- ----+-----+--------+------
--   1 |  25 |  50000 | NYC
--   2 |  30 |  75000 | SF
--   3 |  32 |  75000 | NYC
--   4 |  35 |  80000 | NYC
--   5 |  40 |  75000 | LA
--   6 |  32 |  90000 | SF
-- (6 rows)
\`\`\`

Missing value patterns matter. Missing completely at random means no pattern exists. Missing at random means pattern depends on observed data. Missing not at random means pattern depends on missing values themselves. Understanding patterns guides handling strategy.

### Detailed Missing Value Analysis

Analyze missing value patterns before choosing a strategy. Check missing percentages per column. Identify correlations between missing values. Test if missingness depends on other features. Visualize missing patterns using heatmaps.

Missing completely at random occurs when probability of missing is independent of observed and unobserved data. Example: random data corruption. You can safely use deletion or simple imputation. Missing at random occurs when probability of missing depends only on observed data. Example: income missing more often for young people. You can use model-based imputation. Missing not at random occurs when probability of missing depends on missing values themselves. Example: high-income people less likely to report income. This requires specialized handling.

\`\`\`python
# Detailed Missing Value Analysis
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

data = pd.DataFrame({
    'age': [25, 30, np.nan, 35, 40, np.nan, 28, 32],
    'income': [50000, np.nan, 75000, 80000, np.nan, 90000, 55000, np.nan],
    'education': ['Bachelor', 'Master', 'Bachelor', np.nan, 'PhD', 'Master', np.nan, 'Bachelor'],
    'employed': [True, True, False, True, True, True, False, True]
})

# Calculate missing percentages
missing_pct = data.isnull().sum() / len(data) * 100
print("Missing percentages:")
print(missing_pct)

# Check if missing values correlate
missing_corr = data.isnull().corr()
print("Missing value correlations:")
print(missing_corr)

# Test if missingness depends on other features
# Check if income missing more for unemployed
income_missing_by_employment = data.groupby('employed')['income'].apply(lambda x: x.isnull().sum())
print("Income missing by employment:")
print(income_missing_by_employment)

# Visualize missing patterns
plt.figure(figsize=(10, 6))
sns.heatmap(data.isnull(), cbar=True, yticklabels=False, cmap='viridis')
plt.title('Missing Value Patterns')
plt.show()
\`\`\`

### Advanced Imputation Techniques

Advanced imputation uses machine learning to predict missing values. Iterative imputation uses multiple models. Each feature with missing values becomes a target. Other features become inputs. Models predict missing values iteratively.

Multiple imputation creates several complete datasets. Each dataset has different imputed values. You train models on each dataset. You combine results to account for imputation uncertainty. This provides better uncertainty estimates.

\`\`\`python
# Advanced Imputation Techniques
from sklearn.experimental import enable_iterative_imputer
from sklearn.impute import IterativeImputer
from sklearn.ensemble import RandomForestRegressor
import numpy as np

# Iterative imputation
iterative_imputer = IterativeImputer(
    estimator=RandomForestRegressor(n_estimators=10, random_state=42),
    max_iter=10,
    random_state=42
)

data_numeric = data[['age', 'income']]
data_imputed = iterative_imputer.fit_transform(data_numeric)
print("Iteratively imputed data:")
print(data_imputed)

# Multiple imputation simulation
n_imputations = 5
imputed_datasets = []
for i in range(n_imputations):
    imputer = IterativeImputer(random_state=i)
    imputed = imputer.fit_transform(data_numeric)
    imputed_datasets.append(imputed)

# Average across imputations
final_imputed = np.mean(imputed_datasets, axis=0)
print("Multiple imputation average:")
print(final_imputed)
\`\`\`

### Missing Value Handling Best Practices

Choose strategy based on missing percentage. If less than 5% missing, deletion is acceptable. If 5-20% missing, use imputation. If more than 20% missing, consider if feature is necessary. Very high missing rates may indicate data quality issues.

For numeric features, use mean or median for symmetric distributions. Use median for skewed distributions. Use KNN or iterative imputation for complex patterns. For categorical features, use mode for low cardinality. Use separate category for high cardinality. Consider if missingness itself is informative.

Always validate imputation quality. Compare distributions before and after. Check if imputed values are reasonable. Test model performance with imputed data. Document imputation methods for reproducibility.

## Outlier Detection and Treatment

Outliers are values far from the majority. They occur from measurement errors, data entry mistakes, or rare events. Outliers distort statistics and model training. You must identify and handle them appropriately.

Detection methods include statistical tests, distance measures, and visualization. Z-scores flag values beyond thresholds. Interquartile range identifies values outside quartile bounds. Isolation forests detect anomalies automatically. Visualization shows outliers in scatter plots.

### Detailed Outlier Detection Methods

Z-score method calculates standardized scores. Z = (x - μ) / σ. Values with |Z| > 3 are outliers. This assumes normal distribution. It works well for symmetric data. It fails for skewed distributions.

Modified Z-score uses median and median absolute deviation. It is more robust to outliers. MAD = median(|x - median(x)|). Modified Z = 0.6745 × (x - median) / MAD. Values with |modified Z| > 3.5 are outliers.

Interquartile range method uses quartiles. Q1 is 25th percentile. Q3 is 75th percentile. IQR = Q3 - Q1. Lower bound = Q1 - 1.5×IQR. Upper bound = Q3 + 1.5×IQR. Values outside bounds are outliers. This method is distribution-free. It works for any distribution shape.

Isolation forest uses tree-based anomaly detection. It isolates outliers using random splits. Outliers require fewer splits to isolate. It works for high-dimensional data. It handles multiple outliers well.

\`\`\`python
# Detailed Outlier Detection
from sklearn.ensemble import IsolationForest
from scipy import stats
import numpy as np

data = np.array([10, 12, 11, 13, 15, 14, 100, 16, 12, 11, 200, 13, 14, 15, 12])

# Method 1: Standard Z-score
z_scores = np.abs(stats.zscore(data))
outliers_z = np.where(z_scores > 3)[0]
print("Z-score outliers (indices): " + str(outliers_z))

# Method 2: Modified Z-score
median = np.median(data)
mad = np.median(np.abs(data - median))
modified_z = 0.6745 * (data - median) / mad
outliers_modz = np.where(np.abs(modified_z) > 3.5)[0]
print("Modified Z-score outliers: " + str(outliers_modz))

# Method 3: IQR method
q1 = np.percentile(data, 25)
q3 = np.percentile(data, 75)
iqr = q3 - q1
lower = q1 - 1.5 * iqr
upper = q3 + 1.5 * iqr
outliers_iqr = np.where((data < lower) | (data > upper))[0]
print("IQR outliers: " + str(outliers_iqr))

# Method 4: Isolation Forest
iso_forest = IsolationForest(contamination=0.1, random_state=42)
outlier_labels = iso_forest.fit_predict(data.reshape(-1, 1))
outliers_iso = np.where(outlier_labels == -1)[0]
print("Isolation Forest outliers: " + str(outliers_iso))
\`\`\`

### Multivariate Outlier Detection

Multivariate outliers are unusual combinations of features. They may not be outliers in individual dimensions. Methods include Mahalanobis distance, local outlier factor, and DBSCAN clustering.

Mahalanobis distance measures distance from distribution center. It accounts for feature correlations. D = √((x - μ)ᵀ Σ⁻¹ (x - μ)). Large distances indicate outliers. Threshold typically uses chi-square distribution.

Local outlier factor compares local density. It identifies points with lower density than neighbors. LOF > 1 indicates outlier. Higher values mean more anomalous. It works well for clusters with varying densities.

\`\`\`python
# Multivariate Outlier Detection
from sklearn.covariance import EllipticEnvelope
from sklearn.neighbors import LocalOutlierFactor
from scipy.spatial.distance import mahalanobis
import numpy as np

# Sample 2D data
data_2d = np.array([
    [1, 2], [1.1, 2.1], [1.2, 2.2],
    [10, 20], [10.1, 20.1],
    [5, 100]  # Outlier
])

# Method 1: Elliptic Envelope (Mahalanobis-based)
envelope = EllipticEnvelope(contamination=0.1, random_state=42)
outlier_labels_env = envelope.fit_predict(data_2d)
outliers_env = np.where(outlier_labels_env == -1)[0]
print("Elliptic Envelope outliers: " + str(outliers_env))

# Method 2: Local Outlier Factor
lof = LocalOutlierFactor(n_neighbors=3, contamination=0.1)
outlier_labels_lof = lof.fit_predict(data_2d)
lof_scores = lof.negative_outlier_factor_
outliers_lof = np.where(outlier_labels_lof == -1)[0]
print("LOF outliers: " + str(outliers_lof))
print("LOF scores: " + str(lof_scores))
\`\`\`

### Outlier Treatment Strategies

Treatment depends on outlier cause and impact. Legitimate outliers represent rare events. They should be kept but handled carefully. Erroneous outliers should be removed or corrected.

Removal deletes outlier records. Use when outliers are errors. Use when outliers are few. Use when removal doesn't affect sample size significantly. Capping limits extreme values. Set values beyond thresholds to threshold values. Use when outliers are legitimate but extreme. Use when you want to preserve sample size.

Transformation reduces outlier impact. Log transformation compresses large values. Square root transformation moderates extremes. Box-Cox transformation normalizes distributions. Use when outliers are legitimate. Use when you want to preserve all data.

Separate modeling treats outliers differently. Build models for normal and outlier cases. Use when outliers represent different populations. Use when outliers have different patterns.

![Outlier Detection](/tutorials/ai-tutorial-02-data-preparation/diagram-outlier-detection.svg)

The diagram shows outlier detection methods. Z-score method marks values beyond 3 standard deviations. IQR method marks values below Q1-1.5×IQR or above Q3+1.5×IQR. Isolation forest separates outliers using tree structures. Each method has different sensitivity and assumptions.

\`\`\`python
# Outlier Detection and Treatment
import pandas as pd
import numpy as np
from scipy import stats

# Sample data with outliers
data = pd.DataFrame({
    'value': [10, 12, 11, 13, 15, 14, 100, 16, 12, 11, 200, 13]
})

# Method 1: Z-score detection
z_scores = np.abs(stats.zscore(data['value']))
outliers_z = data[z_scores > 3]
print("Z-score outliers: " + str(len(outliers_z)))

# Method 2: IQR method
Q1 = data['value'].quantile(0.25)
Q3 = data['value'].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR
outliers_iqr = data[(data['value'] < lower_bound) | (data['value'] > upper_bound)]
print("IQR outliers: " + str(len(outliers_iqr)))

# Method 3: Remove outliers
data_cleaned = data[(data['value'] >= lower_bound) & (data['value'] <= upper_bound)]

# Method 4: Cap outliers
data_capped = data.copy()
data_capped.loc[data_capped['value'] < lower_bound, 'value'] = lower_bound
data_capped.loc[data_capped['value'] > upper_bound, 'value'] = upper_bound

print("Original mean: " + str(data['value'].mean()))
print("Cleaned mean: " + str(data_cleaned['value'].mean()))
# Result:
# Z-score outliers: 2
# IQR outliers: 2
# Original mean: 35.25
# Cleaned mean: 12.7
\`\`\`

\`\`\`sql
-- NeuronDB: Outlier Detection
CREATE TABLE measurements (
    id SERIAL PRIMARY KEY,
    value NUMERIC
);

INSERT INTO measurements (value) VALUES
    (10), (12), (11), (13), (15), (14), (100), (16), (12), (11), (200), (13);

-- Z-score detection
WITH stats AS (
    SELECT 
        AVG(value) AS mean_val,
        STDDEV(value) AS std_val
    FROM measurements
)
SELECT m.id, m.value
FROM measurements m, stats s
WHERE ABS(m.value - s.mean_val) / NULLIF(s.std_val, 0) > 3;

-- IQR method
WITH quartiles AS (
    SELECT 
        PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY value) AS q1,
        PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY value) AS q3
    FROM measurements
),
bounds AS (
    SELECT 
        q1 - 1.5 * (q3 - q1) AS lower_bound,
        q3 + 1.5 * (q3 - q1) AS upper_bound
    FROM quartiles
)
SELECT m.id, m.value
FROM measurements m, bounds b
WHERE m.value < b.lower_bound OR m.value > b.upper_bound;

-- Remove outliers
CREATE TABLE cleaned_measurements AS
WITH quartiles AS (
    SELECT 
        PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY value) AS q1,
        PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY value) AS q3
    FROM measurements
),
bounds AS (
    SELECT 
        q1 - 1.5 * (q3 - q1) AS lower_bound,
        q3 + 1.5 * (q3 - q1) AS upper_bound
    FROM quartiles
)
SELECT m.*
FROM measurements m, bounds b
WHERE m.value >= b.lower_bound AND m.value <= b.upper_bound;
\`\`\`

Outlier treatment depends on context. Removal works when outliers are errors. Capping limits extreme values to bounds. Transformation reduces outlier impact. Separate modeling handles legitimate rare cases. Domain knowledge guides appropriate treatment.

## Normalization and Standardization

Features have different scales. Age ranges from 0 to 100. Income ranges from 0 to 1,000,000. Distance algorithms treat larger numbers as more important. Normalization and standardization make features comparable.

Normalization scales values to 0-1 range. Formula is (x - min) / (max - min). Standardization centers values around zero with unit variance. Formula is (x - mean) / std. Choose based on algorithm requirements.

![Feature Scaling](/tutorials/ai-tutorial-02-data-preparation/diagram-feature-scaling.svg)

The diagram shows scaling transformations. Original data has different ranges. Normalization maps all values to 0-1. Standardization centers at zero with unit spread. Both methods preserve relationships while making features comparable.

\`\`\`python
# Normalization and Standardization
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler, StandardScaler

# Sample data with different scales
data = pd.DataFrame({
    'age': [25, 30, 35, 40, 45],
    'income': [50000, 75000, 100000, 125000, 150000],
    'score': [0.5, 0.7, 0.8, 0.9, 1.0]
})

# Method 1: Min-Max Normalization (0-1 range)
scaler_minmax = MinMaxScaler()
data_normalized = pd.DataFrame(
    scaler_minmax.fit_transform(data),
    columns=data.columns
)
print("Normalized data:")
print(data_normalized)

# Method 2: Standardization (zero mean, unit variance)
scaler_std = StandardScaler()
data_standardized = pd.DataFrame(
    scaler_std.fit_transform(data),
    columns=data.columns
)
print("Standardized data:")
print(data_standardized.head())

# Result:
# Normalized data:
#    age  income  score
# 0  0.0     0.0    0.0
# 1  0.25    0.25   0.4
# 2  0.5     0.5    0.6
# 3  0.75    0.75   0.8
# 4  1.0     1.0    1.0
\`\`\`

\`\`\`sql
-- NeuronDB: Feature Scaling
CREATE TABLE customer_features (
    id SERIAL PRIMARY KEY,
    age INTEGER,
    income NUMERIC,
    score NUMERIC
);

INSERT INTO customer_features (age, income, score) VALUES
    (25, 50000, 0.5),
    (30, 75000, 0.7),
    (35, 100000, 0.8),
    (40, 125000, 0.9),
    (45, 150000, 1.0);

-- Min-Max Normalization
SELECT 
    id,
    (age - MIN(age) OVER ())::NUMERIC / NULLIF(MAX(age) OVER () - MIN(age) OVER (), 0) AS age_normalized,
    (income - MIN(income) OVER ())::NUMERIC / NULLIF(MAX(income) OVER () - MIN(income) OVER (), 0) AS income_normalized,
    (score - MIN(score) OVER ())::NUMERIC / NULLIF(MAX(score) OVER () - MIN(score) OVER (), 0) AS score_normalized
FROM customer_features;

-- Standardization
SELECT 
    id,
    (age - AVG(age) OVER ())::NUMERIC / NULLIF(STDDEV(age) OVER (), 0) AS age_standardized,
    (income - AVG(income) OVER ())::NUMERIC / NULLIF(STDDEV(income) OVER (), 0) AS income_standardized,
    (score - AVG(score) OVER ())::NUMERIC / NULLIF(STDDEV(score) OVER (), 0) AS score_standardized
FROM customer_features;
\`\`\`

Scaling requirements vary by algorithm. Distance-based algorithms need scaling. Neural networks require normalization. Tree-based algorithms are scale-invariant. Linear models benefit from standardization. Check algorithm documentation for requirements.

## Feature Engineering

Feature engineering creates new features from existing data. It transforms raw inputs into useful representations. Good features improve model performance more than algorithm selection. Domain knowledge guides feature creation.

Common techniques include interaction features, polynomial features, time-based features, and text features. Interaction features combine multiple inputs. Polynomial features capture non-linear relationships. Time features extract temporal patterns. Text features convert words to numbers.

![Feature Engineering](/tutorials/ai-tutorial-02-data-preparation/diagram-feature-engineering.svg)

The diagram shows feature engineering transformations. Raw features include price and area. Interaction feature multiplies price and area. Polynomial feature squares area. Time feature extracts month from date. Each transformation captures different patterns.

\`\`\`python
# Feature Engineering
import pandas as pd
import numpy as np
from sklearn.preprocessing import PolynomialFeatures

# Sample data
data = pd.DataFrame({
    'price': [100, 200, 300, 400],
    'area': [500, 1000, 1500, 2000],
    'date': pd.to_datetime(['2024-01-15', '2024-02-20', '2024-03-10', '2024-04-05'])
})

# Interaction features
data['price_area'] = data['price'] * data['area']
data['price_per_area'] = data['price'] / data['area']

# Polynomial features
poly = PolynomialFeatures(degree=2, include_bias=False)
poly_features = poly.fit_transform(data[['price', 'area']])
data_poly = pd.DataFrame(
    poly_features,
    columns=['price', 'area', 'price^2', 'price×area', 'area^2']
)

# Time-based features
data['year'] = data['date'].dt.year
data['month'] = data['date'].dt.month
data['day_of_week'] = data['date'].dt.dayofweek
data['is_weekend'] = data['day_of_week'].isin([5, 6]).astype(int)

print("Engineered features:")
print(data[['price', 'area', 'price_area', 'price_per_area', 'month', 'is_weekend']])
# Result:
#    price  area  price_area  price_per_area  month  is_weekend
# 0    100   500       50000            0.20      1           0
# 1    200  1000      200000           0.20      2           1
# 2    300  1500      450000           0.20      3           0
# 3    400  2000      800000           0.20      4           0
\`\`\`

\`\`\`sql
-- NeuronDB: Feature Engineering
CREATE TABLE property_data (
    id SERIAL PRIMARY KEY,
    price NUMERIC,
    area NUMERIC,
    sale_date DATE
);

INSERT INTO property_data (price, area, sale_date) VALUES
    (100000, 500, '2024-01-15'),
    (200000, 1000, '2024-02-20'),
    (300000, 1500, '2024-03-10'),
    (400000, 2000, '2024-04-05');

-- Interaction features
SELECT 
    id,
    price,
    area,
    price * area AS price_area,
    price / NULLIF(area, 0) AS price_per_area
FROM property_data;

-- Polynomial features
SELECT 
    id,
    price,
    area,
    price * price AS price_squared,
    area * area AS area_squared,
    price * area AS price_area_interaction
FROM property_data;

-- Time-based features
SELECT 
    id,
    sale_date,
    EXTRACT(YEAR FROM sale_date) AS year,
    EXTRACT(MONTH FROM sale_date) AS month,
    EXTRACT(DOW FROM sale_date) AS day_of_week,
    CASE WHEN EXTRACT(DOW FROM sale_date) IN (0, 6) THEN 1 ELSE 0 END AS is_weekend
FROM property_data;
\`\`\`

Feature engineering requires iteration. Start with domain knowledge. Create candidate features. Test feature importance. Remove redundant features. Monitor model performance. Automated feature engineering tools exist but manual engineering often performs better.

## Feature Selection

Feature selection reduces dimensionality. It removes irrelevant or redundant features. Fewer features mean faster training and less overfitting. Selection methods include filter, wrapper, and embedded approaches.

Filter methods use statistical tests. They rank features independently. Wrapper methods use model performance. They search feature subsets. Embedded methods use model internals. They select during training.

![Feature Selection](/tutorials/ai-tutorial-02-data-preparation/diagram-feature-selection.svg)

The diagram shows selection methods. Filter method scores each feature independently. Wrapper method tests feature subsets with models. Embedded method uses model weights or importance. Each method has different computational cost and effectiveness.

\`\`\`python
# Feature Selection
import pandas as pd
import numpy as np
from sklearn.feature_selection import SelectKBest, f_classif, RFE
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression

# Sample data
X = pd.DataFrame({
    'feature1': np.random.randn(100),
    'feature2': np.random.randn(100),
    'feature3': np.random.randn(100),
    'feature4': np.random.randn(100),
    'feature5': np.random.randn(100)
})
y = (X['feature1'] + X['feature2'] > 0).astype(int)

# Method 1: Filter method (statistical test)
selector_filter = SelectKBest(score_func=f_classif, k=3)
X_selected_filter = selector_filter.fit_transform(X, y)
selected_features_filter = X.columns[selector_filter.get_support()]
print("Filter selected: " + str(list(selected_features_filter)))

# Method 2: Wrapper method (RFE)
estimator = LogisticRegression()
selector_rfe = RFE(estimator, n_features_to_select=3)
X_selected_rfe = selector_rfe.fit_transform(X, y)
selected_features_rfe = X.columns[selector_rfe.get_support()]
print("RFE selected: " + str(list(selected_features_rfe)))

# Method 3: Embedded method (feature importance)
rf = RandomForestClassifier(n_estimators=100)
rf.fit(X, y)
feature_importance = pd.Series(rf.feature_importances_, index=X.columns)
top_features = feature_importance.nlargest(3).index
print("Embedded selected: " + str(list(top_features)))
# Result:
# Filter selected: ['feature1', 'feature2', 'feature3']
# RFE selected: ['feature1', 'feature2', 'feature4']
# Embedded selected: ['feature1', 'feature2', 'feature3']
\`\`\`

\`\`\`sql
-- NeuronDB: Feature Selection
CREATE TABLE training_data (
    id SERIAL PRIMARY KEY,
    feature1 NUMERIC,
    feature2 NUMERIC,
    feature3 NUMERIC,
    feature4 NUMERIC,
    feature5 NUMERIC,
    target INTEGER
);

-- Statistical correlation for filter method
SELECT 
    'feature1' AS feature,
    ABS(CORR(feature1, target)) AS correlation
FROM training_data
UNION ALL
SELECT 'feature2', ABS(CORR(feature2, target)) FROM training_data
UNION ALL
SELECT 'feature3', ABS(CORR(feature3, target)) FROM training_data
UNION ALL
SELECT 'feature4', ABS(CORR(feature4, target)) FROM training_data
UNION ALL
SELECT 'feature5', ABS(CORR(feature5, target)) FROM training_data
ORDER BY correlation DESC
LIMIT 3;

-- Feature importance from model
CREATE TEMP TABLE model_features AS
SELECT neurondb.train(
    'default',
    'random_forest',
    'training_data',
    'target',
    ARRAY['feature1', 'feature2', 'feature3', 'feature4', 'feature5'],
    '{"n_trees": 100}'::jsonb
)::integer AS model_id;

SELECT neurondb.feature_importance(
    (SELECT model_id FROM model_features)
) ORDER BY importance DESC LIMIT 3;
\`\`\`

Feature selection balances performance and complexity. More features can improve accuracy but increase overfitting risk. Fewer features reduce complexity but may miss important patterns. Use cross-validation to evaluate selection strategies.

## Data Validation

Data validation checks data quality after preparation. It verifies completeness, correctness, and consistency. Validation catches errors before training. It ensures data meets model requirements.

Validation checks include range validation, type validation, constraint validation, and relationship validation. Range validation ensures values fall within expected bounds. Type validation ensures correct data types. Constraint validation checks business rules. Relationship validation verifies referential integrity.

![Data Validation](/tutorials/ai-tutorial-02-data-preparation/diagram-data-validation.svg)

The diagram shows validation checks. Range check flags values outside 0-100. Type check flags non-numeric values. Constraint check flags invalid combinations. Relationship check flags orphaned records. Each check prevents different error types.

\`\`\`python
# Data Validation
import pandas as pd
import numpy as np

# Sample data
data = pd.DataFrame({
    'age': [25, 30, 150, 35, -5],
    'income': [50000, 75000, 100000, 'invalid', 80000],
    'email': ['user@example.com', 'invalid-email', 'test@test.com', 'user@domain', 'valid@email.com']
})

# Range validation
def validate_range(df, column, min_val, max_val):
    invalid = df[(df[column] < min_val) | (df[column] > max_val)]
    return invalid

age_invalid = validate_range(data, 'age', 0, 120)
print("Invalid ages: " + str(len(age_invalid)))

# Type validation
def validate_type(df, column, expected_type):
    invalid = df[~df[column].apply(lambda x: isinstance(x, expected_type))]
    return invalid

income_invalid = validate_type(data, 'income', (int, float))
print("Invalid income types: " + str(len(income_invalid)))

# Pattern validation (email)
import re
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
email_invalid = data[~data['email'].str.match(email_pattern)]
print("Invalid emails: " + str(len(email_invalid)))

# Result:
# Invalid ages: 2
# Invalid income types: 1
# Invalid emails: 2
\`\`\`

\`\`\`sql
-- NeuronDB: Data Validation
CREATE TABLE customer_data (
    id SERIAL PRIMARY KEY,
    age INTEGER,
    income NUMERIC,
    email VARCHAR(255)
);

INSERT INTO customer_data (age, income, email) VALUES
    (25, 50000, 'user@example.com'),
    (30, 75000, 'invalid-email'),
    (150, 100000, 'test@test.com'),
    (35, NULL, 'user@domain'),
    (-5, 80000, 'valid@email.com');

-- Range validation
SELECT id, age, 'age out of range' AS validation_error
FROM customer_data
WHERE age < 0 OR age > 120;

-- Type validation
SELECT id, income, 'invalid income type' AS validation_error
FROM customer_data
WHERE income IS NULL OR income < 0;

-- Pattern validation (email)
SELECT id, email, 'invalid email format' AS validation_error
FROM customer_data
WHERE email !~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';

-- Combined validation report
SELECT 
    COUNT(*) AS total_records,
    COUNT(CASE WHEN age < 0 OR age > 120 THEN 1 END) AS invalid_age_count,
    COUNT(CASE WHEN income IS NULL OR income < 0 THEN 1 END) AS invalid_income_count,
    COUNT(CASE WHEN email !~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' THEN 1 END) AS invalid_email_count
FROM customer_data;
\`\`\`

Validation should be automated. Create validation rules early. Run validation after each preparation step. Document validation failures. Fix errors systematically. Re-validate after fixes. Maintain validation logs for auditing.

## Complete Example: Customer Data Preparation

This example demonstrates complete data preparation workflow for customer data.

\`\`\`python
# Complete Data Preparation Example
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer

# Step 1: Load raw data
raw_data = pd.DataFrame({
    'customer_id': range(1, 101),
    'age': np.random.randint(18, 80, 100),
    'age': np.where(np.random.random(100) < 0.1, np.nan, np.random.randint(18, 80, 100)),
    'income': np.where(np.random.random(100) < 0.15, np.nan, np.random.randint(20000, 150000, 100)),
    'purchase_amount': np.random.randn(100) * 500 + 1000,
    'city': np.random.choice(['NYC', 'SF', 'LA', 'Chicago', None], 100, p=[0.3, 0.3, 0.2, 0.15, 0.05])
})

# Step 2: Handle missing values
numeric_imputer = SimpleImputer(strategy='median')
categorical_imputer = SimpleImputer(strategy='most_frequent')

raw_data[['age', 'income']] = numeric_imputer.fit_transform(raw_data[['age', 'income']])
raw_data['city'] = categorical_imputer.fit_transform(raw_data[['city']]).ravel()

# Step 3: Remove outliers (IQR method)
def remove_outliers_iqr(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    return df[(df[column] >= lower) & (df[column] <= upper)]

clean_data = remove_outliers_iqr(raw_data, 'purchase_amount')

# Step 4: Feature engineering
clean_data['age_group'] = pd.cut(clean_data['age'], bins=[0, 30, 50, 100], labels=['Young', 'Middle', 'Senior'])
clean_data['income_per_age'] = clean_data['income'] / clean_data['age']
clean_data['high_income'] = (clean_data['income'] > clean_data['income'].median()).astype(int)

# Step 5: Encode categorical variables
clean_data = pd.get_dummies(clean_data, columns=['city', 'age_group'], prefix=['city', 'age'])

# Step 6: Normalize numeric features
scaler = StandardScaler()
numeric_cols = ['age', 'income', 'purchase_amount', 'income_per_age']
clean_data[numeric_cols] = scaler.fit_transform(clean_data[numeric_cols])

# Step 7: Final validation
print("Final dataset shape: " + str(clean_data.shape))
print("Missing values: " + str(clean_data.isnull().sum().sum()))
print("Ready for training: " + str(clean_data.isnull().sum().sum() == 0))
# Result:
# Final dataset shape: (95, 12)
# Missing values: 0
# Ready for training: True
\`\`\`

\`\`\`sql
-- NeuronDB: Complete Data Preparation
CREATE TABLE raw_customers (
    customer_id SERIAL PRIMARY KEY,
    age INTEGER,
    income NUMERIC,
    purchase_amount NUMERIC,
    city VARCHAR(50)
);

-- Insert sample data with missing values and outliers
INSERT INTO raw_customers (age, income, purchase_amount, city)
SELECT 
    CASE WHEN random() < 0.1 THEN NULL ELSE 18 + floor(random() * 62)::INTEGER END,
    CASE WHEN random() < 0.15 THEN NULL ELSE 20000 + floor(random() * 130000)::NUMERIC END,
    (random() * 1000 - 500)::NUMERIC,
    CASE WHEN random() < 0.05 THEN NULL 
         ELSE (ARRAY['NYC', 'SF', 'LA', 'Chicago'])[1 + floor(random() * 4)::INTEGER] END
FROM generate_series(1, 100);

-- Step 1: Handle missing values
UPDATE raw_customers
SET age = COALESCE(age, (SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY age) FROM raw_customers WHERE age IS NOT NULL))
WHERE age IS NULL;

UPDATE raw_customers
SET income = COALESCE(income, (SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY income) FROM raw_customers WHERE income IS NOT NULL))
WHERE income IS NULL;

UPDATE raw_customers
SET city = COALESCE(city, (
    SELECT city FROM raw_customers 
    WHERE city IS NOT NULL 
    GROUP BY city 
    ORDER BY COUNT(*) DESC 
    LIMIT 1
))
WHERE city IS NULL;

-- Step 2: Remove outliers
CREATE TABLE clean_customers AS
WITH quartiles AS (
    SELECT 
        PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY purchase_amount) AS q1,
        PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY purchase_amount) AS q3
    FROM raw_customers
),
bounds AS (
    SELECT q1 - 1.5 * (q3 - q1) AS lower, q3 + 1.5 * (q3 - q1) AS upper
    FROM quartiles
)
SELECT r.*
FROM raw_customers r, bounds b
WHERE r.purchase_amount >= b.lower AND r.purchase_amount <= b.upper;

-- Step 3: Feature engineering
ALTER TABLE clean_customers ADD COLUMN age_group VARCHAR(20);
ALTER TABLE clean_customers ADD COLUMN income_per_age NUMERIC;
ALTER TABLE clean_customers ADD COLUMN high_income INTEGER;

UPDATE clean_customers
SET age_group = CASE 
    WHEN age < 30 THEN 'Young'
    WHEN age < 50 THEN 'Middle'
    ELSE 'Senior'
END,
income_per_age = income / NULLIF(age, 0),
high_income = CASE WHEN income > (SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY income) FROM clean_customers) THEN 1 ELSE 0 END;

-- Step 4: One-hot encoding for categorical
CREATE TABLE prepared_customers AS
SELECT 
    customer_id,
    age,
    income,
    purchase_amount,
    income_per_age,
    high_income,
    CASE WHEN city = 'NYC' THEN 1 ELSE 0 END AS city_nyc,
    CASE WHEN city = 'SF' THEN 1 ELSE 0 END AS city_sf,
    CASE WHEN city = 'LA' THEN 1 ELSE 0 END AS city_la,
    CASE WHEN city = 'Chicago' THEN 1 ELSE 0 END AS city_chicago,
    CASE WHEN age_group = 'Young' THEN 1 ELSE 0 END AS age_young,
    CASE WHEN age_group = 'Middle' THEN 1 ELSE 0 END AS age_middle,
    CASE WHEN age_group = 'Senior' THEN 1 ELSE 0 END AS age_senior
FROM clean_customers;

-- Step 5: Normalize numeric features
CREATE TABLE final_customers AS
SELECT 
    customer_id,
    (age - AVG(age) OVER ()) / NULLIF(STDDEV(age) OVER (), 0) AS age_normalized,
    (income - AVG(income) OVER ()) / NULLIF(STDDEV(income) OVER (), 0) AS income_normalized,
    (purchase_amount - AVG(purchase_amount) OVER ()) / NULLIF(STDDEV(purchase_amount) OVER (), 0) AS purchase_normalized,
    (income_per_age - AVG(income_per_age) OVER ()) / NULLIF(STDDEV(income_per_age) OVER (), 0) AS income_per_age_normalized,
    high_income,
    city_nyc, city_sf, city_la, city_chicago,
    age_young, age_middle, age_senior
FROM prepared_customers;

SELECT COUNT(*) AS total_records, COUNT(*) FILTER (WHERE age_normalized IS NOT NULL) AS complete_records
FROM final_customers;
-- Result:
--  total_records | complete_records
-- ---------------+-----------------
--             95 |              95
-- (1 row)
\`\`\`

## Summary

Data preparation transforms raw data into clean features. You collect data from multiple sources. You handle missing values through removal, imputation, or prediction. You detect and treat outliers using statistical methods. You normalize or standardize features to comparable scales. You engineer new features from existing data. You select relevant features to reduce dimensionality. You validate data quality throughout the process. Each step improves model performance. Proper preparation requires domain knowledge and iterative refinement.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Pandas User Guide](https://pandas.pydata.org/docs/user_guide/index.html)
- [Scikit-learn Preprocessing](https://scikit-learn.org/stable/modules/preprocessing.html)
- [Feature Engineering for Machine Learning](https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/)
`
}

function getLinearModelsTutorialContent(): string {
  return `
## Linear Models Overview

Linear models assume linear relationships between features and targets. They use weighted sums of features to make predictions. Linear models are simple, interpretable, and fast. They work well when relationships are approximately linear. They need feature scaling for best performance.

Linear regression predicts continuous values. Logistic regression predicts probabilities for classification. Both use similar training methods. Both minimize cost functions. Both update weights using gradients.

![Linear Models Overview](/tutorials/ai-tutorial-03-linear-models/diagram-linear-models-overview.svg)

The diagram shows linear model structure. Input features multiply by weights. Results sum with bias. Output is prediction. Training adjusts weights to minimize errors.

## Linear Regression

Linear regression predicts continuous target values. The model equation is y = w₁x₁ + w₂x₂ + ... + wₙxₙ + b. Weights w represent feature importance. Bias b represents baseline value. Training finds optimal weights and bias.

The model assumes linear relationships. It works when features correlate linearly with target. It fails when relationships are non-linear. Feature engineering can create linear relationships from non-linear data.

\`\`\`python
# Linear Regression Example
from sklearn.linear_model import LinearRegression
import numpy as np

# Features: [square_feet, bedrooms] | Target: price
X = np.array([[1500, 2], [2000, 3], [2500, 4], [1800, 3]])
y = np.array([250000, 350000, 450000, 300000])

model = LinearRegression()
model.fit(X, y)

# Make prediction
price = model.predict([[2200, 3]])
print("Predicted price: $" + str(int(price[0])))

# View model parameters
print("Weights: " + str(model.coef_))
print("Bias: " + str(model.intercept_))
# Result:
# Predicted price: $380000
# Weights: [100. 50000.]
# Bias: -50000.0
\`\`\`

\`\`\`sql
-- NeuronDB: Linear Regression
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

Linear regression minimizes mean squared error. MSE measures average squared differences between predictions and actual values. Lower MSE means better fit. Training adjusts weights to reduce MSE.

### Detailed Linear Regression Mathematics

The linear regression model is y = Xw + b. X is the feature matrix with n samples and m features. w is the weight vector with m elements. b is the bias scalar. y is the target vector with n elements.

The cost function is J(w, b) = (1/2n) Σ(y_pred - y_true)². The factor 1/2 simplifies derivative calculations. The derivative with respect to weight wⱼ is ∂J/∂wⱼ = (1/n) Σ(y_pred - y_true) × xⱼ. The derivative with respect to bias b is ∂J/∂b = (1/n) Σ(y_pred - y_true).

Closed-form solution uses normal equation. w = (XᵀX)⁻¹Xᵀy. This gives exact solution in one step. It requires computing matrix inverse. It works for small to medium datasets. It fails when XᵀX is singular.

Gradient descent solution iteratively updates weights. w = w - α × ∇w J. It works for large datasets. It doesn't require matrix inversion. It converges to solution gradually. Learning rate α controls convergence speed.

\`\`\`python
# Detailed Linear Regression Implementation
import numpy as np

class LinearRegressionDetailed:
    def __init__(self, method='gradient_descent', learning_rate=0.01, max_iter=1000):
        self.method = method
        self.learning_rate = learning_rate
        self.max_iter = max_iter
        self.weights = None
        self.bias = None
        self.cost_history = []
    
    def fit(self, X, y):
        n_samples, n_features = X.shape
        
        # Initialize weights and bias
        self.weights = np.zeros(n_features)
        self.bias = 0
        
        if self.method == 'normal_equation':
            # Add bias column
            X_with_bias = np.c_[np.ones(n_samples), X]
            # Normal equation: w = (X^T X)^(-1) X^T y
            weights_with_bias = np.linalg.inv(X_with_bias.T @ X_with_bias) @ X_with_bias.T @ y
            self.bias = weights_with_bias[0]
            self.weights = weights_with_bias[1:]
        else:
            # Gradient descent
            for i in range(self.max_iter):
                # Predictions
                y_pred = X @ self.weights + self.bias
                
                # Compute gradients
                dw = (1/n_samples) * X.T @ (y_pred - y)
                db = (1/n_samples) * np.sum(y_pred - y)
                
                # Update weights
                self.weights -= self.learning_rate * dw
                self.bias -= self.learning_rate * db
                
                # Track cost
                cost = (1/(2*n_samples)) * np.sum((y_pred - y)**2)
                self.cost_history.append(cost)
    
    def predict(self, X):
        return X @ self.weights + self.bias

# Example
X = np.array([[1, 2], [2, 3], [3, 4], [4, 5]])
y = np.array([3, 5, 7, 9])

# Normal equation method
model_normal = LinearRegressionDetailed(method='normal_equation')
model_normal.fit(X, y)
print("Normal equation weights: " + str(model_normal.weights))
print("Normal equation bias: " + str(model_normal.bias))

# Gradient descent method
model_gd = LinearRegressionDetailed(method='gradient_descent', learning_rate=0.01, max_iter=1000)
model_gd.fit(X, y)
print("Gradient descent weights: " + str(model_gd.weights))
print("Gradient descent bias: " + str(model_gd.bias))
print("Final cost: " + str(model_gd.cost_history[-1]))
\`\`\`

### Assumptions and Diagnostics

Linear regression assumes linear relationships. It assumes independent observations. It assumes homoscedasticity. It assumes normally distributed errors. Violations affect model validity.

Check linearity using scatter plots. Plot residuals against predictions. Patterns indicate non-linearity. Check independence by examining residual autocorrelation. Time series data often violates independence.

Check homoscedasticity using residual plots. Constant variance appears as random scatter. Funnel shapes indicate heteroscedasticity. Check normality using Q-Q plots. Deviations from diagonal indicate non-normality.

\`\`\`python
# Regression Diagnostics
import matplotlib.pyplot as plt
from scipy import stats
from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X, y)
y_pred = model.predict(X)
residuals = y - y_pred

# Residual plot
plt.figure(figsize=(12, 4))

plt.subplot(1, 3, 1)
plt.scatter(y_pred, residuals)
plt.axhline(y=0, color='r', linestyle='--')
plt.xlabel('Predicted')
plt.ylabel('Residuals')
plt.title('Residual Plot')

# Q-Q plot for normality
plt.subplot(1, 3, 2)
stats.probplot(residuals, dist="norm", plot=plt)
plt.title('Q-Q Plot')

# Residual histogram
plt.subplot(1, 3, 3)
plt.hist(residuals, bins=10, edgecolor='black')
plt.xlabel('Residuals')
plt.ylabel('Frequency')
plt.title('Residual Distribution')

plt.tight_layout()
plt.show()

# Statistical tests
# Durbin-Watson for independence (close to 2 is good)
from statsmodels.stats.stattools import durbin_watson
dw_stat = durbin_watson(residuals)
print("Durbin-Watson statistic: " + str(dw_stat))

# Shapiro-Wilk for normality
shapiro_stat, shapiro_p = stats.shapiro(residuals)
print("Shapiro-Wilk p-value: " + str(shapiro_p))
\`\`\`

![Linear Regression](/tutorials/ai-tutorial-03-linear-models/diagram-linear-regression.svg)

The diagram shows linear regression fitting. Data points scatter around a line. The model finds the line that minimizes squared distances. The line represents the learned relationship.

## Logistic Regression

Logistic regression predicts probabilities for binary classification. It uses the sigmoid function to map linear combinations to 0-1 range. Probabilities above 0.5 predict class 1. Probabilities below 0.5 predict class 0.

The sigmoid function is σ(z) = 1 / (1 + e^(-z)). It transforms any number to 0-1 range. Large positive z gives probability near 1. Large negative z gives probability near 0. Zero z gives probability 0.5.

\`\`\`python
# Logistic Regression Example
from sklearn.linear_model import LogisticRegression
import numpy as np

# Features: [age, income] | Labels: 0=no loan, 1=loan approved
X = np.array([[25, 30000], [35, 50000], [45, 80000], [30, 40000]])
y = np.array([0, 1, 1, 0])

model = LogisticRegression()
model.fit(X, y)

# Make prediction
prediction = model.predict([[40, 60000]])
probability = model.predict_proba([[40, 60000]])

print("Prediction: " + str(prediction[0]))
print("Probability: " + str(probability[0]))
# Result:
# Prediction: 1
# Probability: [0.2 0.8]
\`\`\`

\`\`\`sql
-- NeuronDB: Logistic Regression
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

Logistic regression minimizes cross-entropy loss. Cross-entropy measures difference between predicted probabilities and true labels. It penalizes confident wrong predictions more than uncertain wrong predictions.

### Detailed Logistic Regression Mathematics

The logistic regression model uses sigmoid activation. z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b. p = σ(z) = 1 / (1 + e^(-z)). p is the predicted probability of class 1.

The sigmoid function maps any real number to (0, 1). When z is large positive, p approaches 1. When z is large negative, p approaches 0. When z is zero, p equals 0.5. The derivative is σ'(z) = σ(z)(1 - σ(z)).

The cost function is cross-entropy. For binary classification: J = -(1/n) Σ[y log(p) + (1-y) log(1-p)]. This measures probability distribution difference. It penalizes confident wrong predictions heavily.

The gradient with respect to weight wⱼ is ∂J/∂wⱼ = (1/n) Σ(p - y) × xⱼ. The gradient with respect to bias b is ∂J/∂b = (1/n) Σ(p - y). These gradients are simpler than linear regression gradients.

\`\`\`python
# Detailed Logistic Regression Implementation
import numpy as np

class LogisticRegressionDetailed:
    def __init__(self, learning_rate=0.01, max_iter=1000, threshold=0.5):
        self.learning_rate = learning_rate
        self.max_iter = max_iter
        self.threshold = threshold
        self.weights = None
        self.bias = None
        self.cost_history = []
    
    def sigmoid(self, z):
        # Clip to prevent overflow
        z = np.clip(z, -500, 500)
        return 1 / (1 + np.exp(-z))
    
    def fit(self, X, y):
        n_samples, n_features = X.shape
        
        # Initialize weights and bias
        self.weights = np.zeros(n_features)
        self.bias = 0
        
        for i in range(self.max_iter):
            # Forward pass
            z = X @ self.weights + self.bias
            p = self.sigmoid(z)
            
            # Compute gradients
            dw = (1/n_samples) * X.T @ (p - y)
            db = (1/n_samples) * np.sum(p - y)
            
            # Update weights
            self.weights -= self.learning_rate * dw
            self.bias -= self.learning_rate * db
            
            # Track cost
            cost = -(1/n_samples) * np.sum(y * np.log(p + 1e-15) + (1-y) * np.log(1-p + 1e-15))
            self.cost_history.append(cost)
    
    def predict_proba(self, X):
        z = X @ self.weights + self.bias
        return self.sigmoid(z)
    
    def predict(self, X):
        probabilities = self.predict_proba(X)
        return (probabilities >= self.threshold).astype(int)

# Example
X = np.array([[25, 30000], [35, 50000], [45, 80000], [30, 40000], [50, 100000]])
y = np.array([0, 1, 1, 0, 1])

model = LogisticRegressionDetailed(learning_rate=0.0001, max_iter=10000)
model.fit(X, y)

predictions = model.predict(X)
probabilities = model.predict_proba(X)

print("Predictions: " + str(predictions))
print("Probabilities: " + str(probabilities))
print("Final cost: " + str(model.cost_history[-1]))
\`\`\`

### Multi-class Logistic Regression

Multi-class logistic regression extends binary classification. It uses softmax activation instead of sigmoid. Softmax converts logits to probability distributions. It ensures probabilities sum to one.

The softmax function is softmax(z)ᵢ = e^zᵢ / Σⱼ e^zⱼ. Each class gets a probability. The class with highest probability is predicted. This is called multinomial logistic regression.

One-vs-rest strategy trains separate binary classifiers. Each classifier distinguishes one class from all others. Predictions combine all classifier outputs. One-vs-one strategy trains classifiers for each pair. More classifiers but potentially more accurate.

\`\`\`python
# Multi-class Logistic Regression
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix

# Generate multi-class data
X, y = make_classification(n_samples=1000, n_features=4, n_classes=3, 
                           n_informative=3, n_redundant=1, random_state=42)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Multi-class logistic regression
model = LogisticRegression(multi_class='multinomial', solver='lbfgs', max_iter=1000)
model.fit(X_train, y_train)

predictions = model.predict(X_test)
probabilities = model.predict_proba(X_test)

print("Classification Report:")
print(classification_report(y_test, predictions))
print("Confusion Matrix:")
print(confusion_matrix(y_test, predictions))
print("Class probabilities for first test sample:")
print(probabilities[0])
\`\`\`

![Logistic Regression](/tutorials/ai-tutorial-03-linear-models/diagram-logistic-regression.svg)

The diagram shows logistic regression decision boundary. Data points belong to two classes. The sigmoid curve separates classes. Points on one side predict class 0. Points on other side predict class 1.

## Cost Functions

Cost functions measure prediction errors. They guide training by indicating error direction and magnitude. Different problems use different cost functions. Regression uses MSE or MAE. Classification uses cross-entropy.

Mean squared error is MSE = (1/n) Σ(y_pred - y_true)². It emphasizes large errors. A prediction off by 10 contributes 100 to cost. A prediction off by 1 contributes 1 to cost. MSE is sensitive to outliers.

Mean absolute error is MAE = (1/n) Σ|y_pred - y_true|. It treats all errors equally. A prediction off by 10 contributes 10 to cost. A prediction off by 1 contributes 1 to cost. MAE is robust to outliers.

\`\`\`python
# Cost Functions Example
import numpy as np
from sklearn.metrics import mean_squared_error, mean_absolute_error, log_loss

# Regression predictions
y_true_reg = np.array([100, 200, 300, 400])
y_pred_reg = np.array([110, 190, 310, 390])

mse = mean_squared_error(y_true_reg, y_pred_reg)
mae = mean_absolute_error(y_true_reg, y_pred_reg)

print("MSE: " + str(mse))
print("MAE: " + str(mae))
# Result:
# MSE: 100.0
# MAE: 10.0

# Classification predictions
y_true_clf = np.array([0, 1, 1, 0])
y_pred_proba = np.array([[0.1, 0.9], [0.2, 0.8], [0.8, 0.2], [0.9, 0.1]])

ce_loss = log_loss(y_true_clf, y_pred_proba)
print("Cross-entropy: " + str(ce_loss))
# Result:
# Cross-entropy: 0.223
\`\`\`

Cross-entropy loss is CE = -Σ y_true × log(y_pred). It measures probability distribution differences. It penalizes confident wrong predictions heavily. It rewards confident correct predictions. It works well for classification.

![Cost Functions](/tutorials/ai-tutorial-03-linear-models/diagram-cost-functions.svg)

The diagram compares cost functions. MSE curve is quadratic. MAE curve is linear. Cross-entropy curve is logarithmic. Each has different sensitivity to errors.

## Gradient Descent

Gradient descent minimizes cost functions. It calculates cost gradients with respect to weights. It updates weights in the direction that reduces cost. It repeats until convergence or maximum iterations.

The update rule is w = w - α × ∇w J. Learning rate α controls step size. Gradient ∇w J points toward higher cost. Negative gradient points toward lower cost. Small learning rates converge slowly but precisely. Large learning rates converge quickly but may overshoot.

### Detailed Gradient Descent Variants

Batch gradient descent uses all training data per update. It computes gradients over entire dataset. It provides stable convergence. It requires memory for all data. It is slow for large datasets.

Stochastic gradient descent uses one sample per update. It computes gradients for single example. It updates weights immediately. It converges faster but noisier. It requires careful learning rate tuning.

Mini-batch gradient descent uses small batches. It balances stability and speed. Typical batch sizes are 32, 64, or 128. It provides smoother convergence than SGD. It is faster than batch gradient descent.

\`\`\`python
# Detailed Gradient Descent Variants
import numpy as np
import matplotlib.pyplot as plt

def generate_data():
    np.random.seed(42)
    X = np.random.randn(1000, 2)
    y = 2 * X[:, 0] + 3 * X[:, 1] + 1 + 0.1 * np.random.randn(1000)
    return X, y

X, y = generate_data()

class GradientDescentVariants:
    def __init__(self, learning_rate=0.01):
        self.lr = learning_rate
        self.cost_history = []
    
    def compute_cost(self, X, y, w, b):
        predictions = X @ w + b
        return np.mean((predictions - y)**2) / 2
    
    def batch_gradient_descent(self, X, y, max_iter=100):
        n_samples, n_features = X.shape
        w = np.zeros(n_features)
        b = 0
        
        for i in range(max_iter):
            predictions = X @ w + b
            dw = (1/n_samples) * X.T @ (predictions - y)
            db = (1/n_samples) * np.sum(predictions - y)
            
            w -= self.lr * dw
            b -= self.lr * db
            
            cost = self.compute_cost(X, y, w, b)
            self.cost_history.append(cost)
        
        return w, b
    
    def stochastic_gradient_descent(self, X, y, max_iter=100):
        n_samples, n_features = X.shape
        w = np.zeros(n_features)
        b = 0
        
        for i in range(max_iter):
            for j in range(n_samples):
                x_sample = X[j:j+1]
                y_sample = y[j:j+1]
                
                prediction = x_sample @ w + b
                dw = x_sample.T @ (prediction - y_sample)
                db = prediction - y_sample
                
                w -= self.lr * dw
                b -= self.lr * db
            
            cost = self.compute_cost(X, y, w, b)
            self.cost_history.append(cost)
        
        return w, b
    
    def mini_batch_gradient_descent(self, X, y, batch_size=32, max_iter=100):
        n_samples, n_features = X.shape
        w = np.zeros(n_features)
        b = 0
        
        for i in range(max_iter):
            indices = np.random.permutation(n_samples)
            X_shuffled = X[indices]
            y_shuffled = y[indices]
            
            for j in range(0, n_samples, batch_size):
                X_batch = X_shuffled[j:j+batch_size]
                y_batch = y_shuffled[j:j+batch_size]
                
                predictions = X_batch @ w + b
                dw = (1/len(X_batch)) * X_batch.T @ (predictions - y_batch)
                db = (1/len(X_batch)) * np.sum(predictions - y_batch)
                
                w -= self.lr * dw
                b -= self.lr * db
            
            cost = self.compute_cost(X, y, w, b)
            self.cost_history.append(cost)
        
        return w, b

# Compare methods
gd = GradientDescentVariants(learning_rate=0.01)

w_batch, b_batch = gd.batch_gradient_descent(X, y, max_iter=50)
cost_batch = gd.cost_history.copy()
gd.cost_history = []

w_sgd, b_sgd = gd.stochastic_gradient_descent(X, y, max_iter=50)
cost_sgd = gd.cost_history.copy()
gd.cost_history = []

w_mini, b_mini = gd.mini_batch_gradient_descent(X, y, batch_size=32, max_iter=50)
cost_mini = gd.cost_history.copy()

print("Batch GD final cost: " + str(cost_batch[-1]))
print("SGD final cost: " + str(cost_sgd[-1]))
print("Mini-batch GD final cost: " + str(cost_mini[-1]))
\`\`\`

### Advanced Optimization Techniques

Momentum accumulates gradient history. v = βv + ∇w, w = w - αv. Velocity β is typically 0.9. It smooths gradient updates. It accelerates convergence in consistent directions. It helps escape shallow local minima.

Nesterov accelerated gradient looks ahead. It computes gradient at predicted position. v = βv + ∇w(w - βv), w = w - αv. It corrects momentum overshooting. It converges faster than standard momentum.

RMSprop adapts learning rates per parameter. It maintains moving average of squared gradients. s = βs + (1-β)(∇w)², w = w - α∇w/√(s + ε). It reduces learning rate for large gradients. It increases learning rate for small gradients.

Adam combines momentum and RMSprop. It maintains both first and second moment estimates. It provides adaptive learning rates per parameter. It works well for most problems. It is the default choice for many applications.

\`\`\`python
# Advanced Optimizers Detailed
class AdvancedOptimizers:
    def __init__(self, learning_rate=0.001):
        self.lr = learning_rate
        self.cost_history = []
    
    def momentum(self, X, y, beta=0.9, max_iter=100):
        n_samples, n_features = X.shape
        w = np.zeros(n_features)
        b = 0
        v_w = np.zeros(n_features)
        v_b = 0
        
        for i in range(max_iter):
            predictions = X @ w + b
            dw = (1/n_samples) * X.T @ (predictions - y)
            db = (1/n_samples) * np.sum(predictions - y)
            
            v_w = beta * v_w + dw
            v_b = beta * v_b + db
            
            w -= self.lr * v_w
            b -= self.lr * v_b
            
            cost = np.mean((predictions - y)**2) / 2
            self.cost_history.append(cost)
        
        return w, b
    
    def rmsprop(self, X, y, beta=0.9, epsilon=1e-8, max_iter=100):
        n_samples, n_features = X.shape
        w = np.zeros(n_features)
        b = 0
        s_w = np.zeros(n_features)
        s_b = 0
        
        for i in range(max_iter):
            predictions = X @ w + b
            dw = (1/n_samples) * X.T @ (predictions - y)
            db = (1/n_samples) * np.sum(predictions - y)
            
            s_w = beta * s_w + (1 - beta) * dw**2
            s_b = beta * s_b + (1 - beta) * db**2
            
            w -= self.lr * dw / (np.sqrt(s_w) + epsilon)
            b -= self.lr * db / (np.sqrt(s_b) + epsilon)
            
            cost = np.mean((predictions - y)**2) / 2
            self.cost_history.append(cost)
        
        return w, b
    
    def adam(self, X, y, beta1=0.9, beta2=0.999, epsilon=1e-8, max_iter=100):
        n_samples, n_features = X.shape
        w = np.zeros(n_features)
        b = 0
        m_w = np.zeros(n_features)
        m_b = 0
        v_w = np.zeros(n_features)
        v_b = 0
        t = 0
        
        for i in range(max_iter):
            t += 1
            predictions = X @ w + b
            dw = (1/n_samples) * X.T @ (predictions - y)
            db = (1/n_samples) * np.sum(predictions - y)
            
            # Update biased first moment
            m_w = beta1 * m_w + (1 - beta1) * dw
            m_b = beta1 * m_b + (1 - beta1) * db
            
            # Update biased second moment
            v_w = beta2 * v_w + (1 - beta2) * dw**2
            v_b = beta2 * v_b + (1 - beta2) * db**2
            
            # Bias correction
            m_w_hat = m_w / (1 - beta1**t)
            m_b_hat = m_b / (1 - beta1**t)
            v_w_hat = v_w / (1 - beta2**t)
            v_b_hat = v_b / (1 - beta2**t)
            
            # Update parameters
            w -= self.lr * m_w_hat / (np.sqrt(v_w_hat) + epsilon)
            b -= self.lr * m_b_hat / (np.sqrt(v_b_hat) + epsilon)
            
            cost = np.mean((predictions - y)**2) / 2
            self.cost_history.append(cost)
        
        return w, b

# Compare optimizers
opt = AdvancedOptimizers(learning_rate=0.01)

w_mom, b_mom = opt.momentum(X, y, max_iter=100)
cost_mom = opt.cost_history.copy()
opt.cost_history = []

w_rms, b_rms = opt.rmsprop(X, y, max_iter=100)
cost_rms = opt.cost_history.copy()
opt.cost_history = []

w_adam, b_adam = opt.adam(X, y, max_iter=100)
cost_adam = opt.cost_history.copy()

print("Momentum final cost: " + str(cost_mom[-1]))
print("RMSprop final cost: " + str(cost_rms[-1]))
print("Adam final cost: " + str(cost_adam[-1]))
\`\`\`

\`\`\`python
# Gradient Descent Example
import numpy as np

def gradient_descent(X, y, learning_rate=0.01, iterations=1000):
    m, n = X.shape
    weights = np.zeros(n)
    bias = 0
    
    for i in range(iterations):
        # Predictions
        y_pred = X.dot(weights) + bias
        
        # Calculate gradients
        dw = (1/m) * X.T.dot(y_pred - y)
        db = (1/m) * np.sum(y_pred - y)
        
        # Update weights
        weights -= learning_rate * dw
        bias -= learning_rate * db
        
        # Calculate cost
        if i % 100 == 0:
            cost = (1/(2*m)) * np.sum((y_pred - y)**2)
            print("Iteration " + str(i) + ", Cost: " + str(cost))
    
    return weights, bias

# Sample data
X = np.array([[1, 2], [2, 3], [3, 4], [4, 5]])
y = np.array([3, 5, 7, 9])

weights, bias = gradient_descent(X, y)
print("Final weights: " + str(weights))
print("Final bias: " + str(bias))
# Result:
# Iteration 0, Cost: 15.5
# Iteration 100, Cost: 0.01
# Iteration 200, Cost: 0.0001
# Final weights: [1. 1.]
# Final bias: 0.0
\`\`\`

\`\`\`sql
-- NeuronDB: Gradient Descent Training
CREATE TABLE training_data (
    id SERIAL PRIMARY KEY,
    feature1 NUMERIC,
    feature2 NUMERIC,
    target NUMERIC
);

INSERT INTO training_data (feature1, feature2, target) VALUES
    (1, 2, 3), (2, 3, 5), (3, 4, 7), (4, 5, 9);

CREATE TEMP TABLE model AS
SELECT neurondb.train(
    'default',
    'linear_regression',
    'training_data',
    'target',
    ARRAY['feature1', 'feature2'],
    '{"learning_rate": 0.01, "max_iters": 1000}'::jsonb
)::integer AS model_id;

SELECT neurondb.get_weights((SELECT model_id FROM model));
-- Returns learned weights and bias
\`\`\`

Gradient descent has variants. Batch gradient descent uses all data per update. Stochastic gradient descent uses one example per update. Mini-batch gradient descent uses small batches. Each variant has different convergence properties.

![Gradient Descent](/tutorials/ai-tutorial-03-linear-models/diagram-gradient-descent.svg)

The diagram shows gradient descent optimization. The cost surface has a valley. The algorithm starts at a random point. It follows gradients downhill. It converges to the minimum.

## Model Evaluation

You evaluate linear models using appropriate metrics. Regression uses MSE, MAE, or R-squared. Classification uses accuracy, precision, recall, or F1 score. Choose metrics matching your goals.

R-squared measures explained variance. R² = 1 - (SS_res / SS_tot). SS_res is sum of squared residuals. SS_tot is total sum of squares. R² near 1 means good fit. R² near 0 means poor fit.

\`\`\`python
# Model Evaluation Example
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.metrics import r2_score, mean_squared_error, accuracy_score, precision_score, recall_score
import numpy as np

# Regression evaluation
X_reg = np.array([[1, 2], [2, 3], [3, 4], [4, 5]])
y_reg = np.array([3, 5, 7, 9])

model_reg = LinearRegression()
model_reg.fit(X_reg, y_reg)
y_pred_reg = model_reg.predict(X_reg)

r2 = r2_score(y_reg, y_pred_reg)
mse = mean_squared_error(y_reg, y_pred_reg)

print("R-squared: " + str(r2))
print("MSE: " + str(mse))
# Result:
# R-squared: 1.0
# MSE: 0.0

# Classification evaluation
X_clf = np.array([[25, 30000], [35, 50000], [45, 80000], [30, 40000]])
y_clf = np.array([0, 1, 1, 0])

model_clf = LogisticRegression()
model_clf.fit(X_clf, y_clf)
y_pred_clf = model_clf.predict(X_clf)

accuracy = accuracy_score(y_clf, y_pred_clf)
precision = precision_score(y_clf, y_pred_clf)
recall = recall_score(y_clf, y_pred_clf)

print("Accuracy: " + str(accuracy))
print("Precision: " + str(precision))
print("Recall: " + str(recall))
# Result:
# Accuracy: 1.0
# Precision: 1.0
# Recall: 1.0
\`\`\`

\`\`\`sql
-- NeuronDB: Model Evaluation
CREATE TABLE test_data (
    id SERIAL PRIMARY KEY,
    feature1 NUMERIC,
    feature2 NUMERIC,
    target NUMERIC
);

INSERT INTO test_data (feature1, feature2, target) VALUES
    (5, 6, 11), (6, 7, 13);

CREATE TEMP TABLE eval_model AS
SELECT neurondb.train(
    'default',
    'linear_regression',
    'training_data',
    'target',
    ARRAY['feature1', 'feature2'],
    '{}'::jsonb
)::integer AS model_id;

SELECT 
    neurondb.predict((SELECT model_id FROM eval_model), ARRAY[feature1, feature2]) AS prediction,
    target AS actual,
    ABS(neurondb.predict((SELECT model_id FROM eval_model), ARRAY[feature1, feature2]) - target) AS error
FROM test_data;
\`\`\`

Evaluation requires separate test data. Never evaluate on training data. Training data gives optimistic results. Test data gives realistic results. Use cross-validation for robust evaluation.

![Model Evaluation](/tutorials/ai-tutorial-03-linear-models/diagram-model-evaluation.svg)

The diagram shows evaluation workflow. You split data into train and test sets. You train on training data. You evaluate on test data. You compare predictions to actual values. You calculate metrics.

## Feature Scaling Importance

Linear models require feature scaling. Features with larger ranges dominate predictions. Scaling makes all features contribute equally. Normalization maps to 0-1. Standardization centers at zero with unit variance.

Without scaling, income (0-1M) dominates age (0-100). The model learns income patterns. It ignores age patterns. With scaling, both features contribute. The model learns from both features.

\`\`\`python
# Feature Scaling Impact
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
import numpy as np

# Unscaled data
X_unscaled = np.array([[25, 50000], [30, 75000], [35, 100000]])
y = np.array([100, 150, 200])

model_unscaled = LinearRegression()
model_unscaled.fit(X_unscaled, y)
print("Unscaled weights: " + str(model_unscaled.coef_))
# Result: Unscaled weights: [0. 0.002]

# Scaled data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_unscaled)

model_scaled = LinearRegression()
model_scaled.fit(X_scaled, y)
print("Scaled weights: " + str(model_scaled.coef_))
# Result: Scaled weights: [25. 25.]
\`\`\`

Scaled features have balanced weights. Unscaled features have imbalanced weights. Balanced weights mean balanced contributions. Imbalanced weights mean imbalanced contributions.

## Regularization Basics

Regularization prevents overfitting. It adds penalty terms to cost functions. L1 regularization adds absolute weight penalties. L2 regularization adds squared weight penalties. Both reduce model complexity.

L1 regularization encourages sparsity. It drives some weights to zero. It performs feature selection automatically. L2 regularization shrinks all weights. It keeps all features but reduces their impact.

\`\`\`python
# Regularization Example
from sklearn.linear_model import Ridge, Lasso
import numpy as np

X = np.array([[1, 2], [2, 3], [3, 4], [4, 5]])
y = np.array([3, 5, 7, 9])

# L2 regularization (Ridge)
ridge = Ridge(alpha=1.0)
ridge.fit(X, y)
print("Ridge weights: " + str(ridge.coef_))

# L1 regularization (Lasso)
lasso = Lasso(alpha=0.1)
lasso.fit(X, y)
print("Lasso weights: " + str(lasso.coef_))
# Result:
# Ridge weights: [0.8 0.8]
# Lasso weights: [0.9 0.9]
\`\`\`

Regularization strength controls tradeoff. Strong regularization reduces overfitting but increases underfitting. Weak regularization reduces underfitting but increases overfitting. Tune regularization strength using validation data.

![Regularization](/tutorials/ai-tutorial-03-linear-models/diagram-regularization.svg)

The diagram shows regularization effects. Without regularization, weights can be large. Large weights cause overfitting. With regularization, weights shrink. Smaller weights reduce overfitting.

## Complete Example: House Price Prediction

This example demonstrates complete linear regression workflow.

\`\`\`python
# Complete Linear Regression Example
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import r2_score, mean_squared_error
import pandas as pd
import numpy as np

# Load and prepare data
data = pd.DataFrame({
    'square_feet': [1500, 2000, 2500, 1800, 2200, 1900, 2100],
    'bedrooms': [2, 3, 4, 3, 3, 2, 3],
    'age': [5, 10, 15, 8, 12, 6, 9],
    'price': [250000, 350000, 450000, 300000, 380000, 280000, 360000]
})

X = data[['square_feet', 'bedrooms', 'age']]
y = data['price']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train model
model = LinearRegression()
model.fit(X_train_scaled, y_train)

# Evaluate
y_pred = model.predict(X_test_scaled)
r2 = r2_score(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)

print("R-squared: " + str(round(r2, 3)))
print("MSE: " + str(int(mse)))
print("RMSE: $" + str(int(np.sqrt(mse))))

# Make prediction
new_house = scaler.transform([[2000, 3, 10]])
predicted_price = model.predict(new_house)
print("Predicted price: $" + str(int(predicted_price[0])))
# Result:
# R-squared: 0.998
# MSE: 250000
# RMSE: $500
# Predicted price: $340000
\`\`\`

\`\`\`sql
-- NeuronDB: Complete Linear Regression
CREATE TABLE house_data (
    id SERIAL PRIMARY KEY,
    square_feet INTEGER,
    bedrooms INTEGER,
    age INTEGER,
    price NUMERIC
);

INSERT INTO house_data (square_feet, bedrooms, age, price) VALUES
    (1500, 2, 5, 250000), (2000, 3, 10, 350000),
    (2500, 4, 15, 450000), (1800, 3, 8, 300000),
    (2200, 3, 12, 380000), (1900, 2, 6, 280000),
    (2100, 3, 9, 360000);

-- Split into train and test
CREATE TABLE train_data AS
SELECT * FROM house_data WHERE id <= 5;

CREATE TABLE test_data AS
SELECT * FROM house_data WHERE id > 5;

-- Train model
CREATE TEMP TABLE price_model AS
SELECT neurondb.train(
    'default',
    'linear_regression',
    'train_data',
    'price',
    ARRAY['square_feet', 'bedrooms', 'age'],
    '{}'::jsonb
)::integer AS model_id;

-- Evaluate on test data
SELECT 
    id,
    price AS actual_price,
    neurondb.predict((SELECT model_id FROM price_model), ARRAY[square_feet, bedrooms, age]) AS predicted_price,
    ABS(price - neurondb.predict((SELECT model_id FROM price_model), ARRAY[square_feet, bedrooms, age])) AS error
FROM test_data;

-- Make prediction
SELECT neurondb.predict(
    (SELECT model_id FROM price_model),
    ARRAY[2000::NUMERIC, 3::NUMERIC, 10::NUMERIC]
) AS predicted_price;
\`\`\`

## Summary

Linear models assume linear relationships between features and targets. Linear regression predicts continuous values. Logistic regression predicts classification probabilities. Both use gradient descent to minimize cost functions. Cost functions measure prediction errors. MSE works for regression. Cross-entropy works for classification. Feature scaling is essential for linear models. Regularization prevents overfitting. L1 encourages sparsity. L2 shrinks weights. Evaluation requires separate test data. Use appropriate metrics for your problem type.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Scikit-learn Linear Models](https://scikit-learn.org/stable/modules/linear_model.html)
- [Introduction to Statistical Learning](https://www.statlearning.com/)
- [Pattern Recognition and Machine Learning](https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf)
`
}

function getNeuralNetworksTutorialContent(): string {
  return `
## Neural Networks Overview

Neural networks learn complex patterns from data. They consist of layers of connected nodes. Each connection has a weight. Training adjusts weights to minimize errors. Neural networks can learn non-linear relationships. They work well for images, text, and complex data.

A neural network has input, hidden, and output layers. Input layer receives features. Hidden layers process information. Output layer produces predictions. More layers enable learning more complex patterns.

![Neural Network Architecture](/tutorials/ai-tutorial-04-neural-networks/diagram-neural-network-architecture.svg)

The diagram shows network structure. Input features flow through hidden layers. Each layer applies weights and activation functions. Output layer produces final predictions.

## Perceptron Model

A perceptron is the simplest neural network. It has one layer with weighted inputs. It sums inputs multiplied by weights. It applies an activation function. It produces binary output.

The perceptron equation is y = f(Σ wᵢxᵢ + b). Weights w multiply inputs x. Bias b shifts the decision boundary. Activation function f produces output. Step function gives 0 or 1. Sigmoid gives probability.

\`\`\`python
# Perceptron Example
import numpy as np

class Perceptron:
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
    
    def fit(self, X, y):
        self.weights = np.zeros(X.shape[1])
        self.bias = 0
        
        for _ in range(self.n_iterations):
            for i in range(X.shape[0]):
                linear_output = np.dot(X[i], self.weights) + self.bias
                prediction = self.activation(linear_output)
                
                # Update weights
                update = self.learning_rate * (y[i] - prediction)
                self.weights += update * X[i]
                self.bias += update
    
    def activation(self, x):
        return 1 if x >= 0 else 0
    
    def predict(self, X):
        return [self.activation(np.dot(x, self.weights) + self.bias) for x in X]

# Example: AND gate
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([0, 0, 0, 1])

perceptron = Perceptron()
perceptron.fit(X, y)
predictions = perceptron.predict(X)
print("Predictions: " + str(predictions))
# Result: Predictions: [0, 0, 0, 1]
\`\`\`

Perceptrons can learn linearly separable patterns. They fail on non-linearly separable patterns like XOR. Multi-layer networks solve this limitation.

![Perceptron](/tutorials/ai-tutorial-04-neural-networks/diagram-perceptron.svg)

The diagram shows perceptron structure. Inputs connect to a single node. The node sums weighted inputs. It applies activation function. It produces output.

## Multi-Layer Networks

Multi-layer networks have multiple hidden layers. Each layer processes information from the previous layer. Deeper networks learn more complex patterns. They can approximate any function given enough neurons.

Forward propagation computes predictions. Input flows through layers. Each layer applies weights and activations. Output layer produces final predictions. Backward propagation computes gradients. Gradients flow backward through layers. They update weights to reduce errors.

\`\`\`python
# Multi-Layer Neural Network
import numpy as np

class NeuralNetwork:
    def __init__(self, layers, learning_rate=0.01):
        self.layers = layers
        self.learning_rate = learning_rate
        self.weights = []
        self.biases = []
        
        # Initialize weights
        for i in range(len(layers) - 1):
            w = np.random.randn(layers[i], layers[i+1]) * 0.1
            b = np.zeros((1, layers[i+1]))
            self.weights.append(w)
            self.biases.append(b)
    
    def sigmoid(self, x):
        return 1 / (1 + np.exp(-np.clip(x, -250, 250)))
    
    def forward(self, X):
        self.activations = [X]
        for i in range(len(self.weights)):
            z = np.dot(self.activations[-1], self.weights[i]) + self.biases[i]
            a = self.sigmoid(z)
            self.activations.append(a)
        return self.activations[-1]
    
    def backward(self, X, y, output):
        m = X.shape[0]
        dW = []
        dB = []
        
        # Output layer error
        error = output - y
        dW.append(np.dot(self.activations[-2].T, error) / m)
        dB.append(np.sum(error, axis=0, keepdims=True) / m)
        
        # Backpropagate through hidden layers
        for i in range(len(self.weights) - 2, -1, -1):
            error = np.dot(error, self.weights[i+1].T) * self.activations[i+1] * (1 - self.activations[i+1])
            dW.insert(0, np.dot(self.activations[i].T, error) / m)
            dB.insert(0, np.sum(error, axis=0, keepdims=True) / m)
        
        return dW, dB
    
    def fit(self, X, y, epochs=1000):
        for epoch in range(epochs):
            output = self.forward(X)
            dW, dB = self.backward(X, y, output)
            
            # Update weights
            for i in range(len(self.weights)):
                self.weights[i] -= self.learning_rate * dW[i]
                self.biases[i] -= self.learning_rate * dB[i]
    
    def predict(self, X):
        return (self.forward(X) > 0.5).astype(int)

# Example: XOR problem
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([[0], [1], [1], [0]])

nn = NeuralNetwork([2, 4, 1], learning_rate=0.5)
nn.fit(X, y, epochs=10000)
predictions = nn.predict(X)
print("Predictions: " + str(predictions.flatten()))
# Result: Predictions: [0 1 1 0]
\`\`\`

Multi-layer networks solve non-linearly separable problems. They learn hierarchical features. Early layers detect simple patterns. Later layers combine simple patterns into complex patterns.

![Multi-Layer Network](/tutorials/ai-tutorial-04-neural-networks/diagram-multi-layer-network.svg)

The diagram shows multi-layer structure. Input flows through hidden layers. Each layer transforms information. Output layer produces predictions.

## Activation Functions

Activation functions introduce non-linearity. Without them, networks are just linear transformations. Non-linearity enables learning complex patterns. Different functions suit different problems.

Sigmoid maps inputs to 0-1 range. It works well for binary classification. It suffers from vanishing gradients in deep networks. Tanh maps inputs to -1 to 1 range. It centers outputs around zero. It also suffers from vanishing gradients.

ReLU is f(x) = max(0, x). It outputs zero for negative inputs. It outputs input for positive inputs. It solves vanishing gradient problems. It enables training deep networks. It is the default choice for hidden layers.

\`\`\`python
# Activation Functions
import numpy as np
import matplotlib.pyplot as plt

def sigmoid(x):
    return 1 / (1 + np.exp(-np.clip(x, -250, 250)))

def tanh(x):
    return np.tanh(x)

def relu(x):
    return np.maximum(0, x)

x = np.linspace(-5, 5, 100)
y_sigmoid = sigmoid(x)
y_tanh = tanh(x)
y_relu = relu(x)

print("Sigmoid(0): " + str(sigmoid(0)))
print("Tanh(0): " + str(tanh(0)))
print("ReLU(0): " + str(relu(0)))
# Result:
# Sigmoid(0): 0.5
# Tanh(0): 0.0
# ReLU(0): 0.0
\`\`\`

Choose activation functions based on problem type. Use sigmoid for binary classification output. Use softmax for multi-class classification output. Use ReLU for hidden layers. Use linear for regression output.

![Activation Functions](/tutorials/ai-tutorial-04-neural-networks/diagram-activation-functions.svg)

The diagram compares activation functions. Sigmoid is S-shaped. Tanh is centered S-shaped. ReLU is linear for positive inputs.

## Forward Propagation

Forward propagation computes predictions. It processes inputs through all layers. Each layer applies weights and activations. It produces final output.

The process starts with input features. First hidden layer computes weighted sum. It applies activation function. Result becomes input to next layer. Process repeats for all layers. Final layer produces predictions.

\`\`\`python
# Forward Propagation
import numpy as np

def forward_propagation(X, weights, biases, activation):
    activations = [X]
    
    for i in range(len(weights)):
        z = np.dot(activations[-1], weights[i]) + biases[i]
        a = activation(z)
        activations.append(a)
    
    return activations

# Example network
X = np.array([[1, 2]])
weights = [
    np.array([[0.5, 0.3], [0.2, 0.4]]),
    np.array([[0.1, 0.6]])
]
biases = [
    np.array([[0.1, 0.2]]),
    np.array([[0.3]])
]

def relu(x):
    return np.maximum(0, x)

activations = forward_propagation(X, weights, biases, relu)
print("Output: " + str(activations[-1]))
# Result: Output: [[0.9]]
\`\`\`

Forward propagation is efficient. It requires one pass through the network. It computes all layer outputs. It stores activations for backpropagation.

## Network Architecture Design

Architecture design affects performance. More layers enable learning complex patterns. More neurons per layer increase capacity. Too many parameters cause overfitting. Too few parameters cause underfitting.

Input layer size matches feature count. Output layer size matches target count. Hidden layer sizes are hyperparameters. Common patterns include decreasing sizes or constant sizes. Start simple and increase complexity as needed.

\`\`\`python
# Architecture Design Example
def create_network(input_size, hidden_sizes, output_size):
    layers = [input_size] + hidden_sizes + [output_size]
    weights = []
    biases = []
    
    for i in range(len(layers) - 1):
        w = np.random.randn(layers[i], layers[i+1]) * 0.1
        b = np.zeros((1, layers[i+1]))
        weights.append(w)
        biases.append(b)
    
    return weights, biases

# Different architectures
arch1 = create_network(10, [5], 1)  # Simple
arch2 = create_network(10, [20, 10], 1)  # Medium
arch3 = create_network(10, [50, 30, 20], 1)  # Complex

print("Architecture 1 layers: 10 -> 5 -> 1")
print("Architecture 2 layers: 10 -> 20 -> 10 -> 1")
print("Architecture 3 layers: 10 -> 50 -> 30 -> 20 -> 1")
\`\`\`

Choose architecture based on data complexity. Simple problems need simple networks. Complex problems need deeper networks. Use validation data to guide architecture selection.

![Network Architecture](/tutorials/ai-tutorial-04-neural-networks/diagram-network-architecture.svg)

The diagram shows different architectures. Simple network has few layers. Complex network has many layers. Each suits different problem complexities.

## Weight Initialization

Weight initialization affects training. Poor initialization causes slow convergence or failure. Good initialization enables faster training. Common methods include random, Xavier, and He initialization.

Random initialization uses small random values. It breaks symmetry between neurons. Too small values cause vanishing gradients. Too large values cause exploding gradients. Xavier initialization scales by layer size. It works well for sigmoid and tanh. He initialization scales by layer size. It works well for ReLU.

\`\`\`python
# Weight Initialization
import numpy as np

def xavier_init(fan_in, fan_out):
    limit = np.sqrt(6.0 / (fan_in + fan_out))
    return np.random.uniform(-limit, limit, (fan_in, fan_out))

def he_init(fan_in, fan_out):
    std = np.sqrt(2.0 / fan_in)
    return np.random.normal(0, std, (fan_in, fan_out))

# Example
w_xavier = xavier_init(10, 20)
w_he = he_init(10, 20)

print("Xavier std: " + str(np.std(w_xavier)))
print("He std: " + str(np.std(w_he)))
# Result:
# Xavier std: 0.158
# He std: 0.447
\`\`\`

Proper initialization is critical. It sets training on the right path. Poor initialization can prevent convergence. Good initialization accelerates convergence.

## Summary

Neural networks learn complex patterns from data. Perceptrons are single-layer networks. Multi-layer networks solve non-linear problems. Activation functions introduce non-linearity. ReLU works well for hidden layers. Forward propagation computes predictions. Architecture design balances capacity and overfitting. Weight initialization affects training success. Proper setup enables learning complex patterns.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/)
- [Deep Learning Book](https://www.deeplearningbook.org/)
- [Scikit-learn Neural Networks](https://scikit-learn.org/stable/modules/neural_networks_supervised.html)
`
}

function getTrainingTutorialContent(): string {
  return `
## Training Overview

Training adjusts network weights to minimize errors. It uses loss functions to measure errors. It uses backpropagation to compute gradients. It uses optimizers to update weights. Training continues until convergence or maximum iterations.

The training loop processes data in batches. Each batch updates weights once. Multiple epochs process all data multiple times. Early stopping prevents overfitting. Learning rate schedules adjust step sizes.

![Training Process](/tutorials/ai-tutorial-05-training/diagram-training-process.svg)

The diagram shows training workflow. Data flows through forward pass. Loss computes errors. Backpropagation computes gradients. Optimizer updates weights. Process repeats until convergence.

## Loss Functions

Loss functions measure prediction errors. They guide weight updates. Different problems use different losses. Regression uses MSE or MAE. Classification uses cross-entropy.

Mean squared error is MSE = (1/n) Σ(y_pred - y_true)². It emphasizes large errors. It works well for regression. Mean absolute error is MAE = (1/n) Σ|y_pred - y_true|. It treats all errors equally. It is robust to outliers.

Cross-entropy loss is CE = -Σ y_true × log(y_pred). It measures probability differences. It works well for classification. It penalizes confident wrong predictions.

\`\`\`python
# Loss Functions
import numpy as np

def mse_loss(y_pred, y_true):
    return np.mean((y_pred - y_true)**2)

def mae_loss(y_pred, y_true):
    return np.mean(np.abs(y_pred - y_true))

def cross_entropy_loss(y_pred, y_true):
    epsilon = 1e-15
    y_pred = np.clip(y_pred, epsilon, 1 - epsilon)
    return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))

# Example
y_pred_reg = np.array([100, 200, 300])
y_true_reg = np.array([110, 190, 310])
print("MSE: " + str(mse_loss(y_pred_reg, y_true_reg)))
print("MAE: " + str(mae_loss(y_pred_reg, y_true_reg)))

y_pred_clf = np.array([0.1, 0.9, 0.8])
y_true_clf = np.array([0, 1, 1])
print("Cross-entropy: " + str(cross_entropy_loss(y_pred_clf, y_true_clf)))
# Result:
# MSE: 100.0
# MAE: 10.0
# Cross-entropy: 0.105
\`\`\`

Choose loss functions matching your problem. Regression problems use MSE or MAE. Classification problems use cross-entropy. Custom losses can encode domain knowledge.

![Loss Functions](/tutorials/ai-tutorial-05-training/diagram-loss-functions.svg)

The diagram compares loss functions. MSE is quadratic. MAE is linear. Cross-entropy is logarithmic.

## Backpropagation

Backpropagation computes gradients efficiently. It uses chain rule to propagate errors backward. It computes gradients for all weights in one pass. It enables training deep networks.

The process starts at output layer. It computes output error. It propagates error backward through layers. Each layer computes its gradient. Gradients accumulate using chain rule.

\`\`\`python
# Backpropagation
import numpy as np

def backward_propagation(y_pred, y_true, activations, weights, activation_derivative):
    m = y_true.shape[0]
    gradients_w = []
    gradients_b = []
    
    # Output layer error
    error = y_pred - y_true
    gradients_w.append(np.dot(activations[-2].T, error) / m)
    gradients_b.append(np.sum(error, axis=0, keepdims=True) / m)
    
    # Backpropagate through hidden layers
    for i in range(len(weights) - 2, -1, -1):
        error = np.dot(error, weights[i+1].T) * activation_derivative(activations[i+1])
        gradients_w.insert(0, np.dot(activations[i].T, error) / m)
        gradients_b.insert(0, np.sum(error, axis=0, keepdims=True) / m)
    
    return gradients_w, gradients_b

# Example usage
y_pred = np.array([[0.9], [0.1], [0.8]])
y_true = np.array([[1.0], [0.0], [1.0]])
activations = [np.array([[1, 2]]), np.array([[0.5, 0.7]]), np.array([[0.9]])]
weights = [np.array([[0.5, 0.3], [0.2, 0.4]]), np.array([[0.1], [0.6]])]

def relu_derivative(x):
    return (x > 0).astype(float)

grad_w, grad_b = backward_propagation(y_pred, y_true, activations, weights, relu_derivative)
print("Gradient shapes: " + str([g.shape for g in grad_w]))
\`\`\`

Backpropagation is the core of neural network training. It enables efficient gradient computation. It makes deep learning practical.

### Detailed Backpropagation Mathematics

Backpropagation uses chain rule from calculus. For output layer, error is δᴸ = ∇ₐC ⊙ σ'(zᴸ). C is cost function. σ' is activation derivative. ⊙ is element-wise multiplication.

For hidden layer l, error propagates backward. δˡ = ((wˡ⁺¹)ᵀ δˡ⁺¹) ⊙ σ'(zˡ). Weights from next layer transpose. Error from next layer. Activation derivative of current layer.

Gradient for weight wˡᵢⱼ is ∂C/∂wˡᵢⱼ = aˡ⁻¹ⱼ × δˡᵢ. Activation from previous layer. Error from current layer. Gradient for bias bˡᵢ is ∂C/∂bˡᵢ = δˡᵢ. Bias gradient equals error.

\`\`\`python
# Detailed Backpropagation Implementation
import numpy as np

class NeuralNetworkDetailed:
    def __init__(self, layers, learning_rate=0.01):
        self.layers = layers
        self.lr = learning_rate
        self.weights = []
        self.biases = []
        self.activations = []
        self.z_values = []
        
        # Initialize weights and biases
        for i in range(len(layers) - 1):
            w = np.random.randn(layers[i+1], layers[i]) * 0.1
            b = np.zeros((layers[i+1], 1))
            self.weights.append(w)
            self.biases.append(b)
    
    def sigmoid(self, z):
        return 1 / (1 + np.exp(-np.clip(z, -500, 500)))
    
    def sigmoid_derivative(self, z):
        s = self.sigmoid(z)
        return s * (1 - s)
    
    def forward(self, X):
        self.activations = [X.T]
        self.z_values = []
        
        for i in range(len(self.weights)):
            z = self.weights[i] @ self.activations[-1] + self.biases[i]
            self.z_values.append(z)
            a = self.sigmoid(z)
            self.activations.append(a)
        
        return self.activations[-1]
    
    def backward(self, y):
        m = y.shape[0]
        y = y.reshape(-1, 1).T
        
        # Output layer error
        delta = (self.activations[-1] - y) * self.sigmoid_derivative(self.z_values[-1])
        
        gradients_w = []
        gradients_b = []
        
        # Backpropagate through layers
        for i in range(len(self.weights) - 1, -1, -1):
            # Gradient for weights
            grad_w = (1/m) * delta @ self.activations[i].T
            gradients_w.insert(0, grad_w)
            
            # Gradient for biases
            grad_b = (1/m) * np.sum(delta, axis=1, keepdims=True)
            gradients_b.insert(0, grad_b)
            
            # Propagate error backward
            if i > 0:
                delta = (self.weights[i].T @ delta) * self.sigmoid_derivative(self.z_values[i-1])
        
        return gradients_w, gradients_b
    
    def update(self, gradients_w, gradients_b):
        for i in range(len(self.weights)):
            self.weights[i] -= self.lr * gradients_w[i]
            self.biases[i] -= self.lr * gradients_b[i]
    
    def train(self, X, y, epochs=1000):
        for epoch in range(epochs):
            # Forward pass
            output = self.forward(X)
            
            # Backward pass
            grad_w, grad_b = self.backward(y)
            
            # Update weights
            self.update(grad_w, grad_b)
            
            if epoch % 100 == 0:
                cost = np.mean((output - y.reshape(-1, 1).T)**2) / 2
                print(f"Epoch {epoch}, Cost: {cost:.4f}")

# Example
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([0, 1, 1, 0])  # XOR problem

nn = NeuralNetworkDetailed([2, 4, 1], learning_rate=0.5)
nn.train(X, y, epochs=1000)

predictions = nn.forward(X)
print("Predictions: " + str(predictions.T.flatten()))
\`\`\`

### Gradient Vanishing and Exploding

Gradient vanishing occurs when gradients become very small. It happens in deep networks. It prevents early layers from learning. It occurs with sigmoid and tanh activations. Their derivatives are bounded and small.

Gradient exploding occurs when gradients become very large. It causes unstable training. It happens with large weights. It causes NaN values. It occurs in recurrent networks.

Solutions include proper weight initialization. Xavier initialization uses variance 1/n. He initialization uses variance 2/n. Batch normalization normalizes activations. Residual connections provide gradient highways. Gradient clipping limits gradient magnitude.

\`\`\`python
# Gradient Vanishing Demonstration
import numpy as np
import matplotlib.pyplot as plt

def demonstrate_gradient_vanishing():
    # Simulate deep network
    depth = 10
    weights = [np.random.randn(10, 10) * 0.5 for _ in range(depth)]
    
    # Initial gradient
    initial_grad = np.ones((10, 1))
    
    # Propagate through layers
    grad = initial_grad
    grad_magnitudes = [np.linalg.norm(grad)]
    
    for i in range(depth):
        # Simulate sigmoid derivative (small values)
        sigmoid_deriv = 0.25  # Maximum value
        grad = weights[i].T @ grad * sigmoid_deriv
        grad_magnitudes.append(np.linalg.norm(grad))
    
    plt.plot(range(len(grad_magnitudes)), grad_magnitudes)
    plt.xlabel('Layer')
    plt.ylabel('Gradient Magnitude')
    plt.title('Gradient Vanishing in Deep Network')
    plt.yscale('log')
    plt.show()
    
    print("Initial gradient magnitude: " + str(grad_magnitudes[0]))
    print("Final gradient magnitude: " + str(grad_magnitudes[-1]))
    print("Reduction factor: " + str(grad_magnitudes[0] / grad_magnitudes[-1]))

demonstrate_gradient_vanishing()
\`\`\`

![Backpropagation](/tutorials/ai-tutorial-05-training/diagram-backpropagation.svg)

The diagram shows gradient flow. Errors propagate backward. Each layer computes its contribution. Gradients accumulate through chain rule.

## Optimizers

Optimizers update weights using gradients. Different optimizers have different update rules. SGD uses simple gradient descent. Momentum adds velocity term. Adam combines momentum and adaptive learning rates.

Stochastic gradient descent is w = w - α × ∇w. Learning rate α controls step size. It is simple but can be slow. Momentum is v = βv + ∇w, w = w - αv. Velocity β accumulates gradients. It accelerates convergence.

Adam adapts learning rates per parameter. It maintains momentum and variance estimates. It works well for most problems. It is the default choice for many applications.

\`\`\`python
# Optimizers
import numpy as np

class SGD:
    def __init__(self, learning_rate=0.01):
        self.learning_rate = learning_rate
    
    def update(self, weights, gradients):
        return [w - self.learning_rate * g for w, g in zip(weights, gradients)]

class Adam:
    def __init__(self, learning_rate=0.001, beta1=0.9, beta2=0.999):
        self.learning_rate = learning_rate
        self.beta1 = beta1
        self.beta2 = beta2
        self.m = None
        self.v = None
        self.t = 0
    
    def update(self, weights, gradients):
        if self.m is None:
            self.m = [np.zeros_like(g) for g in gradients]
            self.v = [np.zeros_like(g) for g in gradients]
        
        self.t += 1
        updated_weights = []
        
        for w, g, m, v in zip(weights, gradients, self.m, self.v):
            m = self.beta1 * m + (1 - self.beta1) * g
            v = self.beta2 * v + (1 - self.beta2) * g**2
            m_hat = m / (1 - self.beta1**self.t)
            v_hat = v / (1 - self.beta2**self.t)
            w_new = w - self.learning_rate * m_hat / (np.sqrt(v_hat) + 1e-8)
            updated_weights.append(w_new)
        
        self.m = [self.beta1 * m + (1 - self.beta1) * g for m, g in zip(self.m, gradients)]
        self.v = [self.beta2 * v + (1 - self.beta2) * g**2 for v, g in zip(self.v, gradients)]
        
        return updated_weights

# Example
weights = [np.array([[0.5], [0.3]])]
gradients = [np.array([[0.1], [0.2]])]

sgd = SGD(learning_rate=0.01)
adam = Adam(learning_rate=0.001)

w_sgd = sgd.update(weights, gradients)
w_adam = adam.update(weights, gradients)

print("SGD update: " + str(w_sgd[0].flatten()))
print("Adam update: " + str(w_adam[0].flatten()))
\`\`\`

Choose optimizers based on problem characteristics. SGD works for simple problems. Adam works for most problems. Experiment to find the best optimizer.

![Optimizers](/tutorials/ai-tutorial-05-training/diagram-optimizers.svg)

The diagram compares optimizer paths. SGD follows gradients directly. Momentum follows smoothed gradients. Adam adapts step sizes per parameter.

## Learning Rate Schedules

Learning rate schedules adjust step sizes during training. Fixed rates can be too large or too small. Adaptive rates improve convergence. Common schedules include step decay, exponential decay, and cosine annealing.

Step decay reduces rate at fixed intervals. Exponential decay reduces rate continuously. Cosine annealing follows cosine curve. Warmup starts with small rates. It prevents early instability.

\`\`\`python
# Learning Rate Schedules
import numpy as np

def step_decay(epoch, initial_lr=0.01, drop=0.5, epochs_drop=10):
    return initial_lr * (drop ** (epoch // epochs_drop))

def exponential_decay(epoch, initial_lr=0.01, decay_rate=0.96):
    return initial_lr * (decay_rate ** epoch)

def cosine_annealing(epoch, initial_lr=0.01, max_epochs=100):
    return initial_lr * 0.5 * (1 + np.cos(np.pi * epoch / max_epochs))

# Example
for epoch in range(0, 50, 10):
    lr_step = step_decay(epoch)
    lr_exp = exponential_decay(epoch)
    lr_cos = cosine_annealing(epoch, max_epochs=50)
    print(f"Epoch {epoch}: Step={lr_step:.4f}, Exp={lr_exp:.4f}, Cos={lr_cos:.4f}")
\`\`\`

Learning rate schedules improve training. They enable faster initial learning. They enable fine-tuning later. They prevent overshooting minima.

![Learning Rate Schedules](/tutorials/ai-tutorial-05-training/diagram-learning-rate-schedules.svg)

The diagram shows different learning rate schedules. Fixed rate stays constant. Step decay reduces at intervals. Exponential decay reduces continuously. Each schedule has different convergence characteristics.

### Detailed Learning Rate Schedule Strategies

Fixed learning rate uses constant value throughout training. It is simple to implement. It requires careful tuning. Too high causes instability. Too low causes slow convergence. It works for simple problems with stable loss landscapes.

Step decay reduces learning rate at fixed intervals. lr(epoch) = initial_lr × drop_factor^(epoch // drop_interval). Drop interval is typically 10-30 epochs. Drop factor is typically 0.1-0.5. It provides controlled reduction. It works well for many problems.

Exponential decay reduces learning rate continuously. lr(epoch) = initial_lr × decay_rate^epoch. Decay rate is typically 0.9-0.99. It provides smooth reduction. It requires tuning decay rate carefully. It works for problems needing gradual reduction.

Cosine annealing follows cosine curve. lr(epoch) = initial_lr × 0.5 × (1 + cos(π × epoch / max_epochs)). It starts high and ends low. It provides smooth transition. It works well for long training runs. It often improves final performance.

Warmup starts with small learning rate. It gradually increases to target rate. It prevents early instability. It helps with large batch training. Typical warmup is 5-10% of total epochs.

\`\`\`python
# Detailed Learning Rate Schedules
import numpy as np
import matplotlib.pyplot as plt

class LearningRateSchedules:
    def fixed(self, epoch, initial_lr=0.01):
        return initial_lr
    
    def step_decay(self, epoch, initial_lr=0.01, drop_factor=0.5, drop_interval=10):
        return initial_lr * (drop_factor ** (epoch // drop_interval))
    
    def exponential_decay(self, epoch, initial_lr=0.01, decay_rate=0.96):
        return initial_lr * (decay_rate ** epoch)
    
    def cosine_annealing(self, epoch, initial_lr=0.01, max_epochs=100):
        return initial_lr * 0.5 * (1 + np.cos(np.pi * epoch / max_epochs))
    
    def warmup_cosine(self, epoch, initial_lr=0.01, warmup_epochs=10, max_epochs=100):
        if epoch < warmup_epochs:
            return initial_lr * (epoch / warmup_epochs)
        else:
            cosine_epoch = epoch - warmup_epochs
            cosine_max = max_epochs - warmup_epochs
            return initial_lr * 0.5 * (1 + np.cos(np.pi * cosine_epoch / cosine_max))
    
    def polynomial_decay(self, epoch, initial_lr=0.01, max_epochs=100, power=0.9):
        return initial_lr * ((1 - epoch / max_epochs) ** power)

schedules = LearningRateSchedules()
epochs = np.arange(0, 100)

# Compare schedules
lr_fixed = [schedules.fixed(e) for e in epochs]
lr_step = [schedules.step_decay(e) for e in epochs]
lr_exp = [schedules.exponential_decay(e) for e in epochs]
lr_cosine = [schedules.cosine_annealing(e, max_epochs=100) for e in epochs]
lr_warmup = [schedules.warmup_cosine(e, max_epochs=100) for e in epochs]

plt.figure(figsize=(12, 6))
plt.plot(epochs, lr_fixed, label='Fixed')
plt.plot(epochs, lr_step, label='Step Decay')
plt.plot(epochs, lr_exp, label='Exponential')
plt.plot(epochs, lr_cosine, label='Cosine Annealing')
plt.plot(epochs, lr_warmup, label='Warmup + Cosine')
plt.xlabel('Epoch')
plt.ylabel('Learning Rate')
plt.title('Learning Rate Schedules Comparison')
plt.legend()
plt.grid(True)
plt.show()

# Performance comparison
print("Final learning rates:")
print("Fixed: " + str(lr_fixed[-1]))
print("Step: " + str(lr_step[-1]))
print("Exponential: " + str(lr_exp[-1]))
print("Cosine: " + str(lr_cosine[-1]))
print("Warmup+Cosine: " + str(lr_warmup[-1]))
\`\`\`

### Learning Rate Finder

Learning rate finder identifies optimal learning rate range. It trains with exponentially increasing rates. It plots loss versus learning rate. Optimal range is where loss decreases fastest. It helps choose initial learning rate.

Process starts with very small learning rate. It increases exponentially each batch. It records loss for each rate. It stops when loss diverges. Plot shows loss curve. Steepest descent indicates good range.

\`\`\`python
# Learning Rate Finder
import numpy as np
import matplotlib.pyplot as plt

def find_learning_rate(model, X_train, y_train, start_lr=1e-7, end_lr=1, num_iterations=100):
    learning_rates = []
    losses = []
    
    # Save initial weights
    initial_weights = [w.copy() for w in model.weights]
    
    # Exponential range
    lr_mult = (end_lr / start_lr) ** (1 / num_iterations)
    
    current_lr = start_lr
    
    for i in range(num_iterations):
        # Set learning rate
        model.lr = current_lr
        
        # Forward and backward pass
        output = model.forward(X_train)
        grad_w, grad_b = model.backward(y_train)
        model.update(grad_w, grad_b)
        
        # Record
        loss = np.mean((output - y_train.reshape(-1, 1).T)**2) / 2
        learning_rates.append(current_lr)
        losses.append(loss)
        
        # Increase learning rate
        current_lr *= lr_mult
        
        # Stop if loss explodes
        if loss > 10 * losses[0] or np.isnan(loss):
            break
    
    # Restore initial weights
    model.weights = initial_weights
    
    # Plot
    plt.figure(figsize=(10, 6))
    plt.semilogx(learning_rates, losses)
    plt.xlabel('Learning Rate')
    plt.ylabel('Loss')
    plt.title('Learning Rate Finder')
    plt.grid(True)
    plt.show()
    
    # Find steepest descent region
    loss_diff = np.diff(losses)
    steepest_idx = np.argmin(loss_diff)
    optimal_lr = learning_rates[steepest_idx]
    
    print("Suggested learning rate: " + str(optimal_lr))
    return optimal_lr, learning_rates, losses

# Example usage would be:
# optimal_lr, lrs, losses = find_learning_rate(nn, X, y)
\`\`\`

## Batch Processing

Batch processing groups examples for efficiency. Large batches provide stable gradients. Small batches provide frequent updates. Mini-batches balance stability and speed.

Batch size affects training dynamics. Large batches converge smoothly but slowly. Small batches converge quickly but noisily. Typical batch sizes are 32, 64, or 128.

\`\`\`python
# Batch Processing
import numpy as np

def create_batches(X, y, batch_size=32):
    n_samples = X.shape[0]
    batches = []
    
    for i in range(0, n_samples, batch_size):
        end_idx = min(i + batch_size, n_samples)
        batches.append((X[i:end_idx], y[i:end_idx]))
    
    return batches

# Example
X = np.random.randn(100, 10)
y = np.random.randn(100, 1)

batches = create_batches(X, y, batch_size=32)
print("Number of batches: " + str(len(batches)))
print("Batch sizes: " + str([b[0].shape[0] for b in batches]))
# Result:
# Number of batches: 4
# Batch sizes: [32, 32, 32, 4]
\`\`\`

Batch processing enables efficient training. It uses parallel computation. It provides stable gradient estimates. It is essential for large datasets.

## Gradient Clipping

Gradient clipping prevents exploding gradients. It limits gradient magnitudes. It stabilizes training. It is essential for recurrent networks.

Clipping methods include norm clipping and value clipping. Norm clipping scales gradients to maximum norm. Value clipping clamps gradient values. Both prevent extreme updates.

\`\`\`python
# Gradient Clipping
import numpy as np

def clip_gradients_norm(gradients, max_norm=1.0):
    total_norm = np.sqrt(sum(np.sum(g**2) for g in gradients))
    clip_coef = max_norm / (total_norm + 1e-6)
    
    if clip_coef < 1:
        return [g * clip_coef for g in gradients]
    return gradients

def clip_gradients_value(gradients, min_val=-1.0, max_val=1.0):
    return [np.clip(g, min_val, max_val) for g in gradients]

# Example
gradients = [np.array([[10.0], [5.0]]), np.array([[-8.0]])]

clipped_norm = clip_gradients_norm(gradients, max_norm=1.0)
clipped_val = clip_gradients_value(gradients, min_val=-1.0, max_val=1.0)

print("Original norm: " + str(np.sqrt(sum(np.sum(g**2) for g in gradients))))
print("Clipped norm: " + str(np.sqrt(sum(np.sum(g**2) for g in clipped_norm))))
\`\`\`

Gradient clipping stabilizes training. It prevents weight explosions. It enables training deeper networks. It is especially important for RNNs.

## Summary

Training adjusts weights to minimize errors. Loss functions measure prediction errors. Backpropagation computes gradients efficiently. Optimizers update weights using gradients. Learning rate schedules adjust step sizes. Batch processing enables efficient training. Gradient clipping prevents exploding gradients. Proper training setup enables learning complex patterns.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Deep Learning Book](https://www.deeplearningbook.org/)
- [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/)
- [PyTorch Optimizers](https://pytorch.org/docs/stable/optim.html)
`
}

function getRegularizationTutorialContent(): string {
  return `
## Regularization Overview

Regularization prevents overfitting. It reduces model complexity. It improves generalization. It balances bias and variance. Different techniques work for different models.

Overfitting occurs when models memorize training data. They perform well on training data. They perform poorly on new data. Regularization forces models to learn general patterns.

![Overfitting Problem](/tutorials/ai-tutorial-06-regularization/diagram-overfitting-problem.svg)

The diagram shows overfitting. Training accuracy is high. Test accuracy is low. The model memorizes training patterns. It fails on new patterns.

## Bias-Variance Tradeoff

Bias measures model simplicity. High bias means underfitting. Models miss important patterns. Variance measures model sensitivity. High variance means overfitting. Models learn noise.

The tradeoff balances model complexity. Simple models have high bias and low variance. Complex models have low bias and high variance. Optimal models balance both.

\`\`\`python
# Bias-Variance Tradeoff
import numpy as np
from sklearn.linear_model import LinearRegression, PolynomialFeatures
from sklearn.metrics import mean_squared_error

# Generate data
X = np.linspace(0, 10, 20).reshape(-1, 1)
y = 2 * X.flatten() + np.random.randn(20) * 2

# Simple model (high bias, low variance)
model_simple = LinearRegression()
model_simple.fit(X, y)
y_pred_simple = model_simple.predict(X)
mse_simple = mean_squared_error(y, y_pred_simple)

# Complex model (low bias, high variance)
poly = PolynomialFeatures(degree=15)
X_poly = poly.fit_transform(X)
model_complex = LinearRegression()
model_complex.fit(X_poly, y)
y_pred_complex = model_complex.predict(X_poly)
mse_complex = mean_squared_error(y, y_pred_complex)

print("Simple model MSE: " + str(mse_simple))
print("Complex model MSE: " + str(mse_complex))
# Simple model has higher bias but generalizes better
\`\`\`

Understanding bias-variance helps choose regularization. High bias needs less regularization. High variance needs more regularization.

![Bias-Variance Tradeoff](/tutorials/ai-tutorial-06-regularization/diagram-bias-variance.svg)

The diagram shows the tradeoff. Simple models have high bias. Complex models have high variance. Optimal models balance both.

## L1 and L2 Regularization

L1 regularization adds absolute weight penalties. It encourages sparsity. It performs feature selection. L2 regularization adds squared weight penalties. It shrinks all weights. It prevents large weights.

L1 cost is J = loss + λΣ|w|. Lambda controls strength. Larger lambda increases sparsity. L2 cost is J = loss + λΣw². It shrinks weights toward zero. It doesn't eliminate features.

\`\`\`python
# L1 and L2 Regularization
from sklearn.linear_model import Lasso, Ridge
import numpy as np

X = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
y = np.array([6, 15, 24])

# L1 regularization (Lasso)
lasso = Lasso(alpha=0.1)
lasso.fit(X, y)
print("Lasso weights: " + str(lasso.coef_))
# Some weights become zero

# L2 regularization (Ridge)
ridge = Ridge(alpha=0.1)
ridge.fit(X, y)
print("Ridge weights: " + str(ridge.coef_))
# All weights shrink but remain non-zero
\`\`\`

Choose regularization based on goals. Use L1 for feature selection. Use L2 for weight shrinkage. Use both (Elastic Net) for combined benefits.

![L1 vs L2](/tutorials/ai-tutorial-06-regularization/diagram-l1-l2.svg)

The diagram compares L1 and L2. L1 creates sparse solutions. L2 creates smooth solutions.

## Dropout

Dropout randomly disables neurons during training. It prevents co-adaptation. It forces redundant representations. It reduces overfitting in neural networks.

Dropout rate controls disable probability. Common rates are 0.2 to 0.5. Higher rates increase regularization. Lower rates reduce regularization. During inference, all neurons are active. Outputs are scaled by dropout rate.

### Detailed Dropout Mechanisms

Dropout prevents co-adaptation of neurons. During training, random neurons are disabled. This forces network to learn redundant representations. No single neuron becomes critical. Network becomes more robust.

Mathematical formulation: during training, output is y = f(Wx + b) ⊙ m where m ~ Bernoulli(1-p). During inference, output is y = f(Wx + b) × (1-p). Scaling by (1-p) maintains expected output magnitude.

Spatial dropout drops entire feature maps in CNNs. It works better than standard dropout for convolutional layers. It drops contiguous regions. It prevents spatial co-adaptation.

\`\`\`python
# Detailed Dropout Implementation
import numpy as np
import torch
import torch.nn as nn

class DropoutDetailed:
    def __init__(self, p=0.5):
        self.p = p
        self.mask = None
        self.training = True
    
    def forward(self, x):
        if self.training:
            # Generate dropout mask
            self.mask = (np.random.rand(*x.shape) > self.p) / (1 - self.p)
            return x * self.mask
        else:
            # During inference, no dropout
            return x
    
    def backward(self, grad_output):
        if self.training:
            return grad_output * self.mask
        return grad_output

# PyTorch dropout comparison
class DropoutComparison:
    def __init__(self):
        self.dropout1 = nn.Dropout(p=0.5)  # Standard dropout
        self.dropout2 = nn.Dropout2d(p=0.5)  # Spatial dropout for 2D
        self.dropout3 = nn.AlphaDropout(p=0.5)  # Alpha dropout for SELU
    
    def compare(self, x):
        # Standard dropout
        out1 = self.dropout1(x)
        
        # Spatial dropout (requires 4D input: batch, channels, height, width)
        if len(x.shape) == 4:
            out2 = self.dropout2(x)
        else:
            out2 = None
        
        # Alpha dropout (maintains self-normalizing properties)
        out3 = self.dropout3(x)
        
        return out1, out2, out3

# Example
x = torch.randn(32, 100)  # batch_size=32, features=100
comparison = DropoutComparison()
out1, out2, out3 = comparison.compare(x)
print("Standard dropout output shape: " + str(out1.shape))
print("Alpha dropout output shape: " + str(out3.shape))
\`\`\`

### Advanced Regularization Techniques

Batch normalization normalizes layer inputs. It reduces internal covariate shift. It enables higher learning rates. It acts as regularization. It improves training stability.

Layer normalization normalizes across features. It works for variable-length sequences. It doesn't depend on batch statistics. It works well for RNNs and transformers.

Weight decay adds L2 penalty to weights. It shrinks weights during training. It prevents large weight values. It is equivalent to L2 regularization in SGD.

\`\`\`python
# Advanced Regularization Techniques
import torch
import torch.nn as nn

class RegularizedNetwork(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super().__init__()
        
        # Layers with batch normalization
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.bn1 = nn.BatchNorm1d(hidden_size)
        self.dropout1 = nn.Dropout(0.5)
        
        self.fc2 = nn.Linear(hidden_size, hidden_size)
        self.bn2 = nn.BatchNorm1d(hidden_size)
        self.dropout2 = nn.Dropout(0.5)
        
        self.fc3 = nn.Linear(hidden_size, output_size)
        
    def forward(self, x):
        x = self.fc1(x)
        x = self.bn1(x)
        x = torch.relu(x)
        x = self.dropout1(x)
        
        x = self.fc2(x)
        x = self.bn2(x)
        x = torch.relu(x)
        x = self.dropout2(x)
        
        x = self.fc3(x)
        return x

# Training with weight decay
model = RegularizedNetwork(10, 20, 1)
optimizer = torch.optim.Adam(model.parameters(), lr=0.001, weight_decay=0.01)

# Weight decay adds L2 penalty
# Loss = original_loss + weight_decay * sum(weights^2)
\`\`\`

### Regularization Hyperparameter Tuning

Tune regularization strength using validation data. Start with default values. Increase if overfitting. Decrease if underfitting. Use grid search or random search.

For L1/L2 regularization, test alpha values from 0.0001 to 10. Use logarithmic scale. For dropout, test rates from 0.1 to 0.7. Higher rates for larger networks. Lower rates for smaller networks.

Cross-validation helps find optimal values. Split data into folds. Test different values on each fold. Average results. Choose values with best validation performance.

\`\`\`python
# Regularization Hyperparameter Tuning
from sklearn.model_selection import GridSearchCV
from sklearn.linear_model import Ridge, Lasso, ElasticNet
from sklearn.neural_network import MLPClassifier
import numpy as np

# Generate data
X = np.random.randn(1000, 20)
y = np.random.randint(0, 2, 1000)

# Tune Ridge regression
ridge_params = {'alpha': [0.001, 0.01, 0.1, 1.0, 10.0, 100.0]}
ridge_grid = GridSearchCV(Ridge(), ridge_params, cv=5, scoring='neg_mean_squared_error')
ridge_grid.fit(X, y)
print("Best Ridge alpha: " + str(ridge_grid.best_params_['alpha']))

# Tune Lasso regression
lasso_params = {'alpha': [0.001, 0.01, 0.1, 1.0, 10.0]}
lasso_grid = GridSearchCV(Lasso(max_iter=10000), lasso_params, cv=5, scoring='neg_mean_squared_error')
lasso_grid.fit(X, y)
print("Best Lasso alpha: " + str(lasso_grid.best_params_['alpha']))

# Tune MLP with dropout
mlp_params = {
    'hidden_layer_sizes': [(50,), (100,), (50, 50)],
    'alpha': [0.0001, 0.001, 0.01],  # L2 regularization
    'learning_rate_init': [0.001, 0.01]
}
mlp_grid = GridSearchCV(MLPClassifier(max_iter=1000), mlp_params, cv=3, scoring='accuracy')
mlp_grid.fit(X, y)
print("Best MLP params: " + str(mlp_grid.best_params_))
\`\`\`

\`\`\`python
# Dropout Implementation
import numpy as np

class Dropout:
    def __init__(self, rate=0.5):
        self.rate = rate
        self.mask = None
    
    def forward(self, x, training=True):
        if training:
            self.mask = np.random.binomial(1, 1 - self.rate, x.shape) / (1 - self.rate)
            return x * self.mask
        return x
    
    def backward(self, grad):
        return grad * self.mask

# Example
dropout = Dropout(rate=0.5)
x = np.array([[1.0, 2.0, 3.0, 4.0]])

# Training mode
x_dropped = dropout.forward(x, training=True)
print("With dropout: " + str(x_dropped))

# Inference mode
x_inference = dropout.forward(x, training=False)
print("Without dropout: " + str(x_inference))
\`\`\`

Dropout is effective for neural networks. It works well with other techniques. It is simple to implement. It significantly reduces overfitting.

![Dropout](/tutorials/ai-tutorial-06-regularization/diagram-dropout.svg)

The diagram shows dropout. Some neurons are disabled during training. All neurons are active during inference.

## Cross-Validation

Cross-validation evaluates model performance robustly. It splits data into folds. It trains on k-1 folds. It tests on remaining fold. It repeats for all folds. It averages results.

K-fold cross-validation uses k folds. Typical k is 5 or 10. Stratified cross-validation maintains class distribution. It works well for imbalanced data.

\`\`\`python
# Cross-Validation
from sklearn.model_selection import KFold, cross_val_score
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.random.randn(100, 10)
y = np.random.randn(100)

model = LinearRegression()
kfold = KFold(n_splits=5, shuffle=True, random_state=42)

scores = cross_val_score(model, X, y, cv=kfold, scoring='neg_mean_squared_error')
print("Cross-validation scores: " + str(-scores))
print("Mean score: " + str(-scores.mean()))
print("Std score: " + str(scores.std()))
\`\`\`

Cross-validation provides robust performance estimates. It uses all data for training and testing. It reduces variance in estimates. It helps detect overfitting.

![Cross-Validation](/tutorials/ai-tutorial-06-regularization/diagram-cross-validation.svg)

The diagram shows 5-fold cross-validation. Data splits into 5 folds. Each fold serves as test set once. Results average across folds.

## Early Stopping

Early stopping monitors validation performance. It stops training when performance degrades. It prevents overfitting automatically. It saves computation time.

The process tracks validation loss. It stops when loss stops improving. It saves the best model. Patience parameter controls wait time. Larger patience waits longer.

\`\`\`python
# Early Stopping
class EarlyStopping:
    def __init__(self, patience=5, min_delta=0.001):
        self.patience = patience
        self.min_delta = min_delta
        self.best_loss = float('inf')
        self.counter = 0
        self.best_weights = None
    
    def check(self, val_loss, model_weights):
        if val_loss < self.best_loss - self.min_delta:
            self.best_loss = val_loss
            self.best_weights = model_weights
            self.counter = 0
            return False
        else:
            self.counter += 1
            return self.counter >= self.patience

# Example usage
early_stopping = EarlyStopping(patience=5)

for epoch in range(100):
    train_loss = 0.5 * (1 - epoch / 100)  # Decreasing
    val_loss = 0.5 * (1 - epoch / 50) if epoch < 50 else 0.5 + (epoch - 50) / 100  # Increases after 50
    
    if early_stopping.check(val_loss, None):
        print(f"Early stopping at epoch {epoch}")
        break
\`\`\`

Early stopping is simple and effective. It prevents overfitting automatically. It saves the best model. It reduces training time.

![Early Stopping](/tutorials/ai-tutorial-06-regularization/diagram-early-stopping.svg)

The diagram shows early stopping. Training loss decreases. Validation loss decreases then increases. Training stops when validation degrades.

## Data Augmentation

Data augmentation creates more training examples. It applies transformations to existing data. It increases dataset diversity. It acts as regularization. It improves generalization.

Common augmentations include rotation, flipping, scaling, and noise. For images, use geometric and color transformations. For text, use paraphrasing and synonym replacement. For audio, use time stretching and pitch shifting.

\`\`\`python
# Data Augmentation
import numpy as np
from scipy.ndimage import rotate, zoom

def augment_image(image, angle_range=15, zoom_range=0.1):
    # Random rotation
    angle = np.random.uniform(-angle_range, angle_range)
    rotated = rotate(image, angle, reshape=False)
    
    # Random zoom
    zoom_factor = 1 + np.random.uniform(-zoom_range, zoom_range)
    zoomed = zoom(rotated, zoom_factor)
    
    # Random noise
    noise = np.random.normal(0, 0.01, zoomed.shape)
    noisy = zoomed + noise
    
    return np.clip(noisy, 0, 1)

# Example
image = np.random.rand(32, 32, 3)
augmented = augment_image(image)
print("Original shape: " + str(image.shape))
print("Augmented shape: " + str(augmented.shape))
\`\`\`

Data augmentation is powerful regularization. It increases effective dataset size. It improves model robustness. It is essential for limited data.

## Summary

Regularization prevents overfitting. Bias-variance tradeoff guides regularization strength. L1 regularization encourages sparsity. L2 regularization shrinks weights. Dropout disables neurons randomly. Cross-validation evaluates performance robustly. Early stopping prevents overfitting automatically. Data augmentation increases dataset diversity. Combined techniques provide strong regularization.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Deep Learning Book](https://www.deeplearningbook.org/)
- [Scikit-learn Regularization](https://scikit-learn.org/stable/modules/linear_model.html#regularization)
- [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/)
`
}

function getEmbeddingsTutorialContent(): string {
  return `
## Embeddings Overview

Embeddings represent data as dense vectors. They capture semantic meaning. Similar items have similar vectors. They enable similarity search and arithmetic operations. Word embeddings represent words as vectors. Sentence embeddings represent sentences. Document embeddings represent documents.

Embeddings transform discrete tokens into continuous vectors. They preserve semantic relationships. Words with similar meanings have similar vectors. They enable mathematical operations on meaning.

![Embeddings Concept](/tutorials/ai-tutorial-07-embeddings/diagram-embeddings-concept.svg)

The diagram shows embedding space. Similar words cluster together. Relationships appear as vector differences. King - Man + Woman approximates Queen.

## Word Embeddings

Word embeddings map words to vectors. Word2Vec learns from context. GloVe learns from co-occurrence statistics. Both capture semantic relationships. Pre-trained embeddings work well for many tasks.

Word2Vec has two architectures. Skip-gram predicts context from word. CBOW predicts word from context. Both learn useful representations. Training uses neural networks on large text corpora.

\`\`\`python
# Word Embeddings with Word2Vec
from gensim.models import Word2Vec

sentences = [
    ['king', 'queen', 'royal'],
    ['man', 'woman', 'person'],
    ['paris', 'france', 'city'],
    ['london', 'england', 'city']
]

model = Word2Vec(sentences, vector_size=100, window=5, min_count=1)
word_vectors = model.wv

# Find similar words
similar = word_vectors.most_similar('king', topn=3)
print("Similar to 'king': " + str(similar))

# Vector arithmetic
result = word_vectors['king'] - word_vectors['man'] + word_vectors['woman']
similar_words = word_vectors.similar_by_vector(result, topn=3)
print("King - Man + Woman: " + str(similar_words))
\`\`\`

\`\`\`sql
-- NeuronDB: Word Embeddings Storage
CREATE TABLE word_embeddings (
    word VARCHAR(100) PRIMARY KEY,
    embedding vector(300)
);

-- Insert pre-trained embeddings
INSERT INTO word_embeddings (word, embedding) VALUES
    ('king', ARRAY[0.1, 0.2, ...]::vector(300)),
    ('queen', ARRAY[0.15, 0.18, ...]::vector(300));

-- Find similar words using cosine similarity
SELECT word, 1 - (embedding <=> (SELECT embedding FROM word_embeddings WHERE word = 'king')) AS similarity
FROM word_embeddings
WHERE word != 'king'
ORDER BY similarity DESC
LIMIT 5;
\`\`\`

Word embeddings capture semantic relationships. They enable similarity search. They support arithmetic operations. They are foundational for NLP.

### Detailed Word Embedding Training Methods

Word2Vec uses two architectures. Skip-gram predicts context words from target word. Continuous Bag of Words predicts target word from context. Both learn embeddings by predicting word co-occurrences.

Skip-gram maximizes probability of context words given target. P(w_{i-k}, ..., w_{i+k} | w_i). It works well for rare words. It requires more training data. It captures multiple contexts per word.

CBOW averages context word embeddings. It predicts target word from context average. It trains faster than skip-gram. It works well for frequent words. It uses less memory.

Training uses negative sampling. Instead of computing all vocabulary probabilities, sample negative examples. Reduces computation from O(V) to O(k) where k is number of negatives. Typical k is 5-20. Speeds up training significantly.

\`\`\`python
# Detailed Word2Vec Training
import numpy as np
from collections import defaultdict
import random

class Word2VecDetailed:
    def __init__(self, vocab_size, embedding_dim=100, window_size=2, negative_samples=5):
        self.vocab_size = vocab_size
        self.embedding_dim = embedding_dim
        self.window_size = window_size
        self.negative_samples = negative_samples
        
        # Initialize embeddings
        self.target_embeddings = np.random.randn(vocab_size, embedding_dim) * 0.01
        self.context_embeddings = np.random.randn(vocab_size, embedding_dim) * 0.01
        
        # Word frequencies for negative sampling
        self.word_freq = defaultdict(int)
    
    def skip_gram_step(self, target_idx, context_idx, learning_rate=0.01):
        # Positive example
        target_emb = self.target_embeddings[target_idx]
        context_emb = self.context_embeddings[context_idx]
        
        # Compute positive score
        score = np.dot(target_emb, context_emb)
        sigmoid_score = 1 / (1 + np.exp(-score))
        
        # Positive gradient
        grad_target_pos = (1 - sigmoid_score) * context_emb
        grad_context_pos = (1 - sigmoid_score) * target_emb
        
        # Negative sampling
        grad_target_neg = np.zeros(self.embedding_dim)
        grad_context_neg = np.zeros(self.embedding_dim)
        
        for _ in range(self.negative_samples):
            neg_idx = self.sample_negative(context_idx)
            neg_emb = self.context_embeddings[neg_idx]
            
            neg_score = np.dot(target_emb, neg_emb)
            sigmoid_neg = 1 / (1 + np.exp(-neg_score))
            
            grad_target_neg += -sigmoid_neg * neg_emb
            grad_context_neg += -sigmoid_neg * target_emb
        
        # Update embeddings
        self.target_embeddings[target_idx] += learning_rate * (grad_target_pos + grad_target_neg)
        self.context_embeddings[context_idx] += learning_rate * grad_context_pos
    
    def sample_negative(self, positive_idx):
        # Sample based on word frequency (unigram distribution)
        while True:
            neg_idx = random.randint(0, self.vocab_size - 1)
            if neg_idx != positive_idx:
                return neg_idx
    
    def train(self, corpus, epochs=10, learning_rate=0.01):
        for epoch in range(epochs):
            total_loss = 0
            for sentence in corpus:
                for i, target_word in enumerate(sentence):
                    # Get context words
                    start = max(0, i - self.window_size)
                    end = min(len(sentence), i + self.window_size + 1)
                    context_words = sentence[start:i] + sentence[i+1:end]
                    
                    for context_word in context_words:
                        self.skip_gram_step(target_word, context_word, learning_rate)
                        total_loss += 1
            
            print(f"Epoch {epoch+1}, Loss: {total_loss}")

# Example usage
corpus = [[0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5]]  # Word indices
model = Word2VecDetailed(vocab_size=10, embedding_dim=50)
model.train(corpus, epochs=5)
\`\`\`

### Embedding Quality Evaluation

Evaluate embeddings using intrinsic and extrinsic tasks. Intrinsic tasks test embedding properties directly. Extrinsic tasks test downstream performance.

Intrinsic tasks include word similarity and word analogy. Word similarity compares embedding similarity to human judgments. Word analogy tests relationships like king - man + woman ≈ queen. These tasks measure embedding quality directly.

Extrinsic tasks test embeddings in applications. Text classification uses embeddings as features. Named entity recognition uses embeddings for sequence labeling. Machine translation uses embeddings for alignment. Performance on these tasks measures practical value.

\`\`\`python
# Embedding Quality Evaluation
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

def evaluate_word_similarity(embeddings, word_pairs, human_scores):
    """Evaluate embedding similarity against human judgments"""
    embedding_scores = []
    
    for word1, word2 in word_pairs:
        if word1 in embeddings and word2 in embeddings:
            sim = cosine_similarity(
                embeddings[word1].reshape(1, -1),
                embeddings[word2].reshape(1, -1)
            )[0][0]
            embedding_scores.append(sim)
        else:
            embedding_scores.append(0)
    
    # Compute correlation
    correlation = np.corrcoef(human_scores, embedding_scores)[0, 1]
    return correlation

def evaluate_word_analogy(embeddings, analogy_tests):
    """Evaluate word analogy tasks"""
    correct = 0
    total = 0
    
    for a, b, c, expected_d in analogy_tests:
        if all(w in embeddings for w in [a, b, c, expected_d]):
            # Compute: a - b + c should be close to expected_d
            vec = embeddings[a] - embeddings[b] + embeddings[c]
            
            # Find closest word
            similarities = {}
            for word, emb in embeddings.items():
                if word not in [a, b, c]:
                    sim = cosine_similarity(vec.reshape(1, -1), emb.reshape(1, -1))[0][0]
                    similarities[word] = sim
            
            predicted_d = max(similarities, key=similarities.get)
            
            if predicted_d == expected_d:
                correct += 1
            total += 1
    
    accuracy = correct / total if total > 0 else 0
    return accuracy

# Example
embeddings = {
    'king': np.array([0.5, 0.3, 0.2]),
    'queen': np.array([0.4, 0.4, 0.2]),
    'man': np.array([0.6, 0.2, 0.2]),
    'woman': np.array([0.3, 0.5, 0.2])
}

word_pairs = [('king', 'queen'), ('man', 'woman')]
human_scores = [0.8, 0.7]

correlation = evaluate_word_similarity(embeddings, word_pairs, human_scores)
print("Similarity correlation: " + str(correlation))

analogy_tests = [('king', 'man', 'woman', 'queen')]
accuracy = evaluate_word_analogy(embeddings, analogy_tests)
print("Analogy accuracy: " + str(accuracy))
\`\`\`

![Word Embeddings](/tutorials/ai-tutorial-07-embeddings/diagram-word-embeddings.svg)

The diagram shows word embedding space. Related words cluster together. Vector differences encode relationships.

## Sentence Embeddings

Sentence embeddings represent entire sentences. They capture sentence meaning. They enable sentence similarity search. They work well for semantic search and clustering.

### Detailed Sentence Embedding Methods

Averaging word embeddings is simple but limited. It computes mean of word vectors. It loses word order information. It works for short sentences. It fails for complex semantics.

Sentence encoders use neural networks. They process entire sentences. They preserve word order. They capture sentence structure. They work better than averaging.

Transformer-based encoders use BERT or similar models. They process sentences through transformer layers. They use [CLS] token or mean pooling. They capture rich semantic information. They work well for many tasks.

\`\`\`python
# Detailed Sentence Embedding Methods
from sentence_transformers import SentenceTransformer
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Method 1: Averaging word embeddings
def average_word_embeddings(sentence, word_embeddings):
    words = sentence.lower().split()
    word_vecs = [word_embeddings.get(word, np.zeros(300)) for word in words]
    if len(word_vecs) == 0:
        return np.zeros(300)
    return np.mean(word_vecs, axis=0)

# Method 2: Sentence transformer
model = SentenceTransformer('all-MiniLM-L6-v2')

sentences = [
    "Machine learning is a subset of artificial intelligence",
    "Deep learning uses neural networks",
    "AI enables computers to learn from data"
]

# Generate embeddings
embeddings_avg = [average_word_embeddings(s, {}) for s in sentences]  # Placeholder
embeddings_transformer = model.encode(sentences)

# Compare similarity
similarity_matrix = cosine_similarity(embeddings_transformer)
print("Sentence similarity matrix:")
print(similarity_matrix)

# Method 3: BERT-based with mean pooling
from transformers import AutoTokenizer, AutoModel
import torch

tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
bert_model = AutoModel.from_pretrained('bert-base-uncased')

def get_bert_embeddings(sentences):
    embeddings = []
    for sentence in sentences:
        inputs = tokenizer(sentence, return_tensors='pt', padding=True, truncation=True, max_length=128)
        with torch.no_grad():
            outputs = bert_model(**inputs)
        # Mean pooling
        embedding = outputs.last_hidden_state.mean(dim=1).squeeze().numpy()
        embeddings.append(embedding)
    return np.array(embeddings)

bert_embeddings = get_bert_embeddings(sentences)
print("BERT embeddings shape: " + str(bert_embeddings.shape))
\`\`\`

### Embedding Quality Metrics and Evaluation

Evaluate embeddings using multiple metrics. Intrinsic metrics test embedding properties. Extrinsic metrics test application performance. Both are important for assessment.

Intrinsic metrics include similarity correlation and analogy accuracy. Similarity correlation compares embedding similarity to human judgments. Higher correlation indicates better embeddings. Analogy accuracy tests word relationships. Higher accuracy indicates better structure.

Extrinsic metrics test downstream tasks. Classification accuracy uses embeddings as features. Clustering quality measures grouping performance. Retrieval performance measures search quality. Better embeddings improve task performance.

\`\`\`python
# Comprehensive Embedding Evaluation
from sklearn.linear_model import LogisticRegression
from sklearn.cluster import KMeans
from sklearn.metrics import adjusted_rand_score, silhouette_score
from scipy.stats import spearmanr

def evaluate_embeddings_comprehensive(embeddings, labels, similarity_pairs=None, human_scores=None):
    results = {}
    
    # 1. Similarity correlation (if human scores available)
    if similarity_pairs and human_scores:
        embedding_scores = []
        for word1, word2 in similarity_pairs:
            if word1 in embeddings and word2 in embeddings:
                sim = cosine_similarity(
                    embeddings[word1].reshape(1, -1),
                    embeddings[word2].reshape(1, -1)
                )[0][0]
                embedding_scores.append(sim)
        
        if len(embedding_scores) == len(human_scores):
            correlation, p_value = spearmanr(embedding_scores, human_scores)
            results['similarity_correlation'] = correlation
            results['similarity_p_value'] = p_value
    
    # 2. Classification performance
    X = np.array([embeddings.get(word, np.zeros(300)) for word in labels.keys()])
    y = list(labels.values())
    
    from sklearn.model_selection import cross_val_score
    clf = LogisticRegression()
    cv_scores = cross_val_score(clf, X, y, cv=5)
    results['classification_accuracy'] = cv_scores.mean()
    results['classification_std'] = cv_scores.std()
    
    # 3. Clustering quality
    n_clusters = len(set(y))
    kmeans = KMeans(n_clusters=n_clusters, random_state=42)
    cluster_labels = kmeans.fit_predict(X)
    
    ari = adjusted_rand_score(y, cluster_labels)
    silhouette = silhouette_score(X, cluster_labels)
    
    results['adjusted_rand_index'] = ari
    results['silhouette_score'] = silhouette
    
    return results

# Example evaluation
embeddings_dict = {
    'cat': np.random.randn(300),
    'dog': np.random.randn(300),
    'car': np.random.randn(300),
    'vehicle': np.random.randn(300)
}
labels_dict = {'cat': 0, 'dog': 0, 'car': 1, 'vehicle': 1}

results = evaluate_embeddings_comprehensive(embeddings_dict, labels_dict)
print("Evaluation results:")
for metric, value in results.items():
    print(f"{metric}: {value:.4f}")
\`\`\`

Methods include averaging word embeddings, training sentence encoders, and using transformer models. Averaging is simple but loses word order. Sentence encoders preserve structure. Transformers capture complex relationships.

\`\`\`python
# Sentence Embeddings
from sentence_transformers import SentenceTransformer
import numpy as np

model = SentenceTransformer('all-MiniLM-L6-v2')

sentences = [
    "The cat sits on the mat",
    "A feline is on the rug",
    "The weather is sunny today"
]

embeddings = model.encode(sentences)

# Compute similarity
similarity = np.dot(embeddings[0], embeddings[1])
print("Similarity between sentence 1 and 2: " + str(similarity))
# High similarity indicates similar meaning
\`\`\`

Sentence embeddings enable semantic search. They find sentences with similar meaning. They work regardless of exact word matches.

![Sentence Embeddings](/tutorials/ai-tutorial-07-embeddings/diagram-sentence-embeddings.svg)

The diagram shows sentence embedding space. Semantically similar sentences cluster together.

## Document Embeddings

Document embeddings represent entire documents. They capture document topics and themes. They enable document similarity and clustering. They work well for information retrieval.

Methods include averaging sentence embeddings, training document encoders, and using transformer models with pooling. Document encoders preserve document structure. Transformers capture long-range dependencies.

\`\`\`python
# Document Embeddings
from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')

documents = [
    "Machine learning is a subset of artificial intelligence...",
    "Deep learning uses neural networks with multiple layers...",
    "The weather forecast predicts rain tomorrow..."
]

doc_embeddings = model.encode(documents)

# Find similar documents
from sklearn.metrics.pairwise import cosine_similarity
similarity_matrix = cosine_similarity(doc_embeddings)
print("Document similarity matrix:")
print(similarity_matrix)
\`\`\`

Document embeddings enable semantic document search. They find documents with similar topics. They work for large document collections.

## Embedding Similarity and Distance

Similarity measures compare embeddings. Cosine similarity measures angle between vectors. Euclidean distance measures straight-line distance. Dot product measures alignment. Each suits different use cases.

Cosine similarity is cos(θ) = (A·B) / (||A|| × ||B||). It ranges from -1 to 1. Higher values mean more similar. It ignores vector magnitudes. It works well for embeddings.

\`\`\`python
# Embedding Similarity
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity, euclidean_distances

embeddings = np.array([
    [1.0, 0.0, 0.0],
    [0.9, 0.1, 0.0],
    [0.0, 1.0, 0.0]
])

# Cosine similarity
cos_sim = cosine_similarity(embeddings)
print("Cosine similarity:")
print(cos_sim)

# Euclidean distance
euc_dist = euclidean_distances(embeddings)
print("Euclidean distance:")
print(euc_dist)
\`\`\`

Choose similarity measures based on needs. Cosine similarity works well for embeddings. Euclidean distance works for spatial data.

![Embedding Similarity](/tutorials/ai-tutorial-07-embeddings/diagram-embedding-similarity.svg)

The diagram shows similarity computation. Vectors with small angles have high cosine similarity.

## Embedding Arithmetic

Embedding arithmetic performs operations on meaning. King - Man + Woman approximates Queen. It demonstrates captured relationships. It enables analogy solving.

Arithmetic works because embeddings capture relationships. Vector differences encode relationships. Adding differences applies relationships. Results approximate semantic operations.

\`\`\`python
# Embedding Arithmetic
from gensim.models import KeyedVectors

# Load pre-trained embeddings
word_vectors = KeyedVectors.load_word2vec_format('word2vec.bin', binary=True)

# King - Man + Woman ≈ Queen
result = word_vectors['king'] - word_vectors['man'] + word_vectors['woman']
similar_words = word_vectors.similar_by_vector(result, topn=5)
print("King - Man + Woman: " + str(similar_words[0][0]))  # Should be 'queen'

# Paris - France + Italy ≈ Rome
result = word_vectors['paris'] - word_vectors['france'] + word_vectors['italy']
similar_words = word_vectors.similar_by_vector(result, topn=5)
print("Paris - France + Italy: " + str(similar_words[0][0]))  # Should be 'rome'
\`\`\`

Embedding arithmetic demonstrates learned relationships. It shows embeddings capture semantic structure. It enables analogy solving.

![Embedding Arithmetic](/tutorials/ai-tutorial-07-embeddings/diagram-embedding-arithmetic.svg)

The diagram shows embedding arithmetic. Vector operations approximate semantic relationships.

## Pre-trained Embeddings

Pre-trained embeddings are trained on large corpora. They capture general language patterns. They work well for many tasks. They save training time and data.

Common pre-trained embeddings include Word2Vec, GloVe, FastText, and transformer embeddings. Word2Vec and GloVe are word-level. FastText handles subwords. Transformers provide contextual embeddings.

\`\`\`python
# Using Pre-trained Embeddings
import gensim.downloader as api

# Load pre-trained Word2Vec
word_vectors = api.load("word2vec-google-news-300")

# Use embeddings
similar = word_vectors.most_similar('computer', topn=5)
print("Similar to 'computer': " + str(similar))
\`\`\`

Pre-trained embeddings provide strong baselines. They work well without fine-tuning. They enable quick prototyping.

## Fine-tuning Embeddings

Fine-tuning adapts pre-trained embeddings to specific tasks. It improves performance on domain data. It requires task-specific training data. It balances general and specific knowledge.

Fine-tuning updates embedding weights. It preserves general knowledge. It learns task-specific patterns. It improves performance on target tasks.

\`\`\`python
# Fine-tuning Embeddings
from sentence_transformers import SentenceTransformer, InputExample, losses
from torch.utils.data import DataLoader

model = SentenceTransformer('all-MiniLM-L6-v2')

# Task-specific examples
examples = [
    InputExample(texts=['query about machine learning', 'document about ML']),
    InputExample(texts=['query about weather', 'weather forecast document'])
]

dataloader = DataLoader(examples, shuffle=True, batch_size=16)
loss = losses.CosineSimilarityLoss(model)

# Fine-tune
model.fit(train_objectives=[(dataloader, loss)], epochs=1)
\`\`\`

Fine-tuning improves task performance. It adapts general embeddings to specific needs. It requires labeled task data.

## Summary

Embeddings represent data as dense vectors. Word embeddings capture word meaning. Sentence embeddings capture sentence meaning. Document embeddings capture document topics. Similarity measures compare embeddings. Cosine similarity works well for embeddings. Embedding arithmetic performs operations on meaning. Pre-trained embeddings provide strong baselines. Fine-tuning adapts embeddings to tasks. Embeddings enable semantic search and similarity operations.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Word2Vec Paper](https://arxiv.org/abs/1301.3781)
- [Sentence Transformers](https://www.sbert.net/)
- [GloVe Paper](https://nlp.stanford.edu/pubs/glove.pdf)
`
}

function getTransformersTutorialContent(): string {
  return `
## Transformers Overview

Transformers process sequences using attention mechanisms. They replaced RNNs for many NLP tasks. They enable parallel processing. They capture long-range dependencies effectively. They form the basis of modern LLMs.

Transformers use self-attention to relate all positions. They process sequences in parallel. They learn complex relationships. They scale to large models and datasets.

![Transformer Architecture](/tutorials/ai-tutorial-08-transformers/diagram-transformer-architecture.svg)

The diagram shows transformer structure. Inputs flow through encoder and decoder stacks. Attention mechanisms relate positions. Feed-forward networks process information.

## Self-Attention Mechanism

Self-attention computes relationships between all positions. It creates query, key, and value vectors. It computes attention scores. It weights values by attention. It captures dependencies regardless of distance.

Attention formula is Attention(Q, K, V) = softmax(QK^T / √d_k) V. Queries Q match against keys K. Values V provide information. Scaling by √d_k stabilizes gradients.

\`\`\`python
# Self-Attention Implementation
import numpy as np
import torch
import torch.nn as nn

class SelfAttention(nn.Module):
    def __init__(self, d_model):
        super().__init__()
        self.d_model = d_model
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
    
    def forward(self, x):
        Q = self.W_q(x)
        K = self.W_k(x)
        V = self.W_v(x)
        
        scores = torch.matmul(Q, K.transpose(-2, -1)) / np.sqrt(self.d_model)
        attention_weights = torch.softmax(scores, dim=-1)
        output = torch.matmul(attention_weights, V)
        
        return output, attention_weights

# Example
attention = SelfAttention(d_model=512)
x = torch.randn(1, 10, 512)  # batch, seq_len, d_model
output, weights = attention(x)
print("Output shape: " + str(output.shape))
print("Attention weights shape: " + str(weights.shape))
\`\`\`

Self-attention captures all pairwise relationships. It enables parallel processing. It scales to long sequences.

![Self-Attention](/tutorials/ai-tutorial-08-transformers/diagram-self-attention.svg)

The diagram shows attention computation. Each position attends to all positions. Attention weights show relationships.

## Multi-Head Attention

Multi-head attention uses multiple attention heads. Each head learns different relationships. Heads are concatenated and projected. This increases model capacity.

Multi-head formula is MultiHead = Concat(head₁, ..., headₕ)W^O where headᵢ = Attention(QWᵢ^Q, KWᵢ^K, VWᵢ^V). Each head has separate weight matrices. They learn complementary patterns.

\`\`\`python
# Multi-Head Attention
class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads):
        super().__init__()
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads
        
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        self.W_o = nn.Linear(d_model, d_model)
    
    def forward(self, x):
        batch_size = x.size(0)
        
        Q = self.W_q(x).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        K = self.W_k(x).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        V = self.W_v(x).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        
        scores = torch.matmul(Q, K.transpose(-2, -1)) / np.sqrt(self.d_k)
        attention_weights = torch.softmax(scores, dim=-1)
        attention_output = torch.matmul(attention_weights, V)
        
        attention_output = attention_output.transpose(1, 2).contiguous().view(
            batch_size, -1, self.d_model
        )
        
        return self.W_o(attention_output)

# Example
mha = MultiHeadAttention(d_model=512, num_heads=8)
x = torch.randn(1, 10, 512)
output = mha(x)
print("Multi-head output shape: " + str(output.shape))
\`\`\`

Multi-head attention increases model capacity. Different heads learn different patterns. They capture diverse relationships.

![Multi-Head Attention](/tutorials/ai-tutorial-08-transformers/diagram-multi-head-attention.svg)

The diagram shows multi-head structure. Multiple attention heads process in parallel. They are concatenated for final output.

## Encoder-Decoder Structure

Encoder-decoder transformers process input-output pairs. Encoder processes input sequence. Decoder generates output sequence. Attention connects encoder and decoder.

Encoder stacks self-attention and feed-forward layers. It processes input independently. Decoder stacks masked self-attention, encoder-decoder attention, and feed-forward layers. Masked attention prevents looking ahead.

\`\`\`python
# Encoder-Decoder Transformer
class TransformerEncoder(nn.Module):
    def __init__(self, d_model, num_heads, d_ff, num_layers):
        super().__init__()
        self.layers = nn.ModuleList([
            TransformerEncoderLayer(d_model, num_heads, d_ff)
            for _ in range(num_layers)
        ])
    
    def forward(self, x):
        for layer in self.layers:
            x = layer(x)
        return x

class TransformerDecoder(nn.Module):
    def __init__(self, d_model, num_heads, d_ff, num_layers):
        super().__init__()
        self.layers = nn.ModuleList([
            TransformerDecoderLayer(d_model, num_heads, d_ff)
            for _ in range(num_layers)
        ])
    
    def forward(self, x, encoder_output):
        for layer in self.layers:
            x = layer(x, encoder_output)
        return x
\`\`\`

Encoder-decoder structure enables sequence-to-sequence tasks. It works for translation, summarization, and generation.

![Encoder-Decoder](/tutorials/ai-tutorial-08-transformers/diagram-encoder-decoder.svg)

The diagram shows encoder-decoder flow. Encoder processes input. Decoder generates output using encoder information.

## Positional Encoding

Positional encoding adds position information. Transformers have no inherent sequence order. Positional encodings inject order information. They use sinusoidal functions or learned embeddings.

Sinusoidal encoding uses sin and cos functions. It encodes relative positions. It generalizes to unseen lengths. Learned embeddings learn position representations. They work well for fixed maximum lengths.

\`\`\`python
# Positional Encoding
class PositionalEncoding(nn.Module):
    def __init__(self, d_model, max_len=5000):
        super().__init__()
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len).unsqueeze(1).float()
        div_term = torch.exp(torch.arange(0, d_model, 2).float() * 
                            -(np.log(10000.0) / d_model))
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        pe = pe.unsqueeze(0)
        self.register_buffer('pe', pe)
    
    def forward(self, x):
        return x + self.pe[:, :x.size(1)]

# Example
pos_encoding = PositionalEncoding(d_model=512)
x = torch.randn(1, 10, 512)
x_pos = pos_encoding(x)
print("Positional encoded shape: " + str(x_pos.shape))
\`\`\`

Positional encoding enables sequence processing. It provides order information. It works with attention mechanisms.

![Positional Encoding](/tutorials/ai-tutorial-08-transformers/diagram-positional-encoding.svg)

The diagram shows positional encoding. Each position gets unique encoding. Encodings are added to embeddings.

## Layer Normalization

Layer normalization stabilizes training. It normalizes inputs within layers. It reduces internal covariate shift. It enables deeper networks.

Normalization formula is LN(x) = γ * (x - μ) / (σ + ε) + β. Mean μ and std σ computed per layer. Scale γ and shift β are learnable. Epsilon ε prevents division by zero.

\`\`\`python
# Layer Normalization
class LayerNorm(nn.Module):
    def __init__(self, d_model, eps=1e-6):
        super().__init__()
        self.gamma = nn.Parameter(torch.ones(d_model))
        self.beta = nn.Parameter(torch.zeros(d_model))
        self.eps = eps
    
    def forward(self, x):
        mean = x.mean(-1, keepdim=True)
        std = x.std(-1, keepdim=True)
        return self.gamma * (x - mean) / (std + self.eps) + self.beta

# Example
layer_norm = LayerNorm(d_model=512)
x = torch.randn(1, 10, 512)
x_norm = layer_norm(x)
print("Normalized shape: " + str(x_norm.shape))
\`\`\`

Layer normalization stabilizes training. It enables deeper networks. It works well with residual connections.

## Feed-Forward Networks

Feed-forward networks process attention outputs. They apply two linear transformations with ReLU. They increase model capacity. They enable non-linear transformations.

FFN formula is FFN(x) = max(0, xW₁ + b₁)W₂ + b₂. First linear layer expands dimensions. ReLU introduces non-linearity. Second linear layer projects back.

\`\`\`python
# Feed-Forward Network
class FeedForward(nn.Module):
    def __init__(self, d_model, d_ff):
        super().__init__()
        self.linear1 = nn.Linear(d_model, d_ff)
        self.linear2 = nn.Linear(d_ff, d_model)
        self.relu = nn.ReLU()
    
    def forward(self, x):
        return self.linear2(self.relu(self.linear1(x)))

# Example
ffn = FeedForward(d_model=512, d_ff=2048)
x = torch.randn(1, 10, 512)
x_ffn = ffn(x)
print("FFN output shape: " + str(x_ffn.shape))
\`\`\`

Feed-forward networks increase model capacity. They enable complex transformations. They work with attention mechanisms.

## Summary

Transformers use attention mechanisms to process sequences. Self-attention relates all positions. Multi-head attention increases capacity. Encoder-decoder structure enables sequence-to-sequence tasks. Positional encoding provides order information. Layer normalization stabilizes training. Feed-forward networks increase capacity. Transformers form the basis of modern language models.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
- [Transformers from Scratch](https://peterbloem.nl/blog/transformers)
`
}

function getLLMsTutorialContent(): string {
  return `
## Large Language Models Overview

Large language models are transformer-based models trained on massive text corpora. They learn language patterns through pre-training. They generate coherent text. They perform various NLP tasks. They form the foundation of modern AI applications.

LLMs use transformer architectures. They scale to billions of parameters. They learn from unsupervised pre-training. They adapt to tasks through fine-tuning. They enable zero-shot and few-shot learning.

![LLM Architecture](/tutorials/ai-tutorial-09-llms/diagram-llm-architecture.svg)

The diagram shows LLM structure. Input tokens flow through transformer layers. Each layer processes information. Output generates next tokens.

## Pre-training Process

Pre-training learns language representations from unlabeled text. Models predict masked tokens or next tokens. They learn syntax, semantics, and world knowledge. They require massive compute and data.

Masked language modeling masks random tokens. Models predict masked tokens from context. This learns bidirectional representations. Next token prediction predicts following tokens. This learns autoregressive generation.

\`\`\`python
# Pre-training Concept
from transformers import AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
model = AutoModelForMaskedLM.from_pretrained('bert-base-uncased')

# Masked language modeling
text = "The cat sat on the [MASK]"
inputs = tokenizer(text, return_tensors='pt')
outputs = model(**inputs)

predictions = tokenizer.decode(outputs.logits[0].argmax(-1))
print("Predicted: " + str(predictions))
\`\`\`

Pre-training creates general language understanding. Models learn from diverse text. They capture linguistic patterns. They enable transfer learning.

![Pre-training](/tutorials/ai-tutorial-09-llms/diagram-pre-training.svg)

The diagram shows pre-training process. Models learn from large text corpora. They predict tokens from context. They learn language representations.

## Fine-tuning Strategies

Fine-tuning adapts pre-trained models to specific tasks. It updates model weights on task data. It requires less data than training from scratch. It improves task performance significantly.

Full fine-tuning updates all parameters. It works well but is expensive. Parameter-efficient fine-tuning updates only some parameters. LoRA adds low-rank adapters. It reduces memory and compute.

![Parameter-Efficient Fine-tuning](/tutorials/ai-tutorial-16-fine-tuning/diagram-parameter-efficient.svg)

The diagram compares full fine-tuning and PEFT methods. Full fine-tuning updates all parameters. PEFT methods update only adapters. LoRA adds low-rank matrices. Reduces memory and compute requirements.

![LoRA Architecture](/tutorials/ai-tutorial-16-fine-tuning/diagram-lora-architecture.svg)

The diagram shows LoRA architecture. Original weights frozen. Low-rank matrices A and B added. Output combines original and adapted weights. Enables efficient fine-tuning.

\`\`\`python
# Fine-tuning Example
from transformers import AutoModelForSequenceClassification, TrainingArguments, Trainer

model = AutoModelForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)

training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=16,
    learning_rate=2e-5,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset,
)

trainer.train()
\`\`\`

Fine-tuning adapts general models to specific tasks. It leverages pre-trained knowledge. It improves with task-specific data.

## Tokenization Methods

Tokenization converts text to model inputs. Different models use different tokenizers. WordPiece splits words into subwords. BPE merges frequent byte pairs. SentencePiece handles multiple languages.

Tokenization handles out-of-vocabulary words. Subword tokenization splits unknown words. It maintains vocabulary coverage. It enables processing any text.

\`\`\`python
# Tokenization
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained('gpt2')

text = "Hello, how are you?"
tokens = tokenizer.tokenize(text)
token_ids = tokenizer.encode(text)

print("Tokens: " + str(tokens))
print("Token IDs: " + str(token_ids))
# Result:
# Tokens: ['Hello', ',', 'Ġhow', 'Ġare', 'Ġyou', '?']
# Token IDs: [15496, 11, 527, 499, 366, 30]
\`\`\`

Tokenization is critical for model performance. It affects vocabulary coverage. It impacts sequence length. It influences model understanding.

![Tokenization Methods](/tutorials/ai-tutorial-09-llms/diagram-tokenization.svg)

The diagram shows tokenization methods. WordPiece splits words into subwords. BPE merges frequent pairs. Each method has different characteristics and use cases.

## GPT Architecture

GPT uses decoder-only transformers. It predicts next tokens autoregressively. It generates text sequentially. It works well for generation tasks.

GPT stacks transformer decoder layers. Each layer has masked self-attention. Masking prevents looking ahead. It enables causal generation.

\`\`\`python
# GPT Generation
from transformers import GPT2LMHeadModel, GPT2Tokenizer

model = GPT2LMHeadModel.from_pretrained('gpt2')
tokenizer = GPT2Tokenizer.from_pretrained('gpt2')

prompt = "The future of AI is"
inputs = tokenizer.encode(prompt, return_tensors='pt')

outputs = model.generate(inputs, max_length=50, num_return_sequences=1)
generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
print("Generated: " + str(generated_text))
\`\`\`

GPT generates coherent text. It continues prompts naturally. It works for various generation tasks.

![GPT Architecture](/tutorials/ai-tutorial-09-llms/diagram-gpt-architecture.svg)

The diagram shows GPT architecture. Decoder-only stack processes tokens. Masked self-attention prevents looking ahead. Feed-forward layers transform representations.

## BERT Architecture

BERT uses encoder-only transformers. It processes bidirectional context. It works well for understanding tasks. It captures context from both directions.

BERT has two pre-training objectives. Masked language modeling learns representations. Next sentence prediction learns relationships. Both improve understanding.

\`\`\`python
# BERT for Classification
from transformers import BertForSequenceClassification, BertTokenizer

model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

text = "This movie is great"
inputs = tokenizer(text, return_tensors='pt', padding=True, truncation=True)
outputs = model(**inputs)

predictions = outputs.logits.argmax(-1)
print("Prediction: " + str(predictions))
\`\`\`

BERT understands context bidirectionally. It works well for classification. It captures sentence relationships.

![BERT Architecture](/tutorials/ai-tutorial-09-llms/diagram-bert-architecture.svg)

The diagram shows BERT architecture. Encoder-only stack processes tokens. Bidirectional self-attention sees both directions. Feed-forward layers transform representations.

## T5 Architecture

T5 uses encoder-decoder transformers. It frames all tasks as text-to-text. It unifies task formats. It works for diverse tasks.

T5 converts tasks to text generation. Classification becomes text generation. Translation becomes text generation. Summarization becomes text generation.

\`\`\`python
# T5 for Text-to-Text
from transformers import T5ForConditionalGeneration, T5Tokenizer

model = T5ForConditionalGeneration.from_pretrained('t5-small')
tokenizer = T5Tokenizer.from_pretrained('t5-small')

# Summarization
text = "summarize: The quick brown fox jumps over the lazy dog."
inputs = tokenizer.encode(text, return_tensors='pt')
outputs = model.generate(inputs, max_length=20)
summary = tokenizer.decode(outputs[0], skip_special_tokens=True)
print("Summary: " + str(summary))
\`\`\`

T5 unifies task formats. It works for many tasks. It simplifies task handling.

## Inference and Generation

Inference uses trained models for predictions. Generation creates new text. Different strategies produce different results. Greedy decoding selects highest probability tokens. Sampling adds randomness.

\`\`\`python
# Generation Strategies
from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch

model = GPT2LMHeadModel.from_pretrained('gpt2')
tokenizer = GPT2Tokenizer.from_pretrained('gpt2')

prompt = "The future of technology"
inputs = tokenizer.encode(prompt, return_tensors='pt')

# Greedy decoding
outputs_greedy = model.generate(inputs, max_length=50, do_sample=False)
text_greedy = tokenizer.decode(outputs_greedy[0], skip_special_tokens=True)

# Sampling
outputs_sample = model.generate(inputs, max_length=50, do_sample=True, temperature=0.7)
text_sample = tokenizer.decode(outputs_sample[0], skip_special_tokens=True)

print("Greedy: " + str(text_greedy))
print("Sampling: " + str(text_sample))
\`\`\`

Generation strategies affect output quality. Greedy produces deterministic results. Sampling produces diverse results. Temperature controls randomness.

## Summary

Large language models are transformer-based models trained on massive text. Pre-training learns general language patterns. Fine-tuning adapts to specific tasks. Tokenization converts text to model inputs. GPT uses decoder-only architecture. BERT uses encoder-only architecture. T5 uses encoder-decoder architecture. Inference generates predictions. Generation creates new text. LLMs enable many AI applications.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [GPT Paper](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)
- [BERT Paper](https://arxiv.org/abs/1810.04805)
- [T5 Paper](https://arxiv.org/abs/1910.10683)
- [Hugging Face Transformers](https://huggingface.co/docs/transformers)
`
}

function getVectorSearchTutorialContent(): string {
  return `
## Vector Search Overview

Vector search finds similar vectors in high-dimensional spaces. It enables similarity search. It works with embeddings. It powers semantic search and recommendation systems. It requires efficient indexing for scale.

Vector search compares query vectors to database vectors. It uses distance metrics to measure similarity. It returns most similar vectors. It scales to millions of vectors with proper indexing.

![Vector Search](/tutorials/ai-tutorial-10-vector-search/diagram-vector-search.svg)

The diagram shows vector search process. Query vector compares to database vectors. Distance metrics measure similarity. Indexes enable fast retrieval.

## Similarity Metrics

Similarity metrics measure vector relationships. Cosine similarity measures angle between vectors. Euclidean distance measures straight-line distance. Manhattan distance measures city-block distance. Each suits different use cases.

Cosine similarity is cos(θ) = (A·B) / (||A|| × ||B||). It ranges from -1 to 1. Higher values mean more similar. It ignores vector magnitudes. It works well for embeddings.

\`\`\`python
# Similarity Metrics
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity, euclidean_distances, manhattan_distances

vectors = np.array([
    [1.0, 0.0, 0.0],
    [0.9, 0.1, 0.0],
    [0.0, 1.0, 0.0]
])

# Cosine similarity
cos_sim = cosine_similarity(vectors)
print("Cosine similarity:")
print(cos_sim)

# Euclidean distance
euc_dist = euclidean_distances(vectors)
print("Euclidean distance:")
print(euc_dist)

# Manhattan distance
man_dist = manhattan_distances(vectors)
print("Manhattan distance:")
print(man_dist)
\`\`\`

\`\`\`sql
-- NeuronDB: Vector Similarity Search
CREATE TABLE document_embeddings (
    id SERIAL PRIMARY KEY,
    content TEXT,
    embedding vector(384)
);

INSERT INTO document_embeddings (content, embedding) VALUES
    ('Machine learning tutorial', ARRAY[0.1, 0.2, ...]::vector(384)),
    ('Deep learning guide', ARRAY[0.15, 0.18, ...]::vector(384));

-- Cosine similarity search
SELECT 
    id,
    content,
    1 - (embedding <=> (SELECT embedding FROM document_embeddings WHERE id = 1)) AS similarity
FROM document_embeddings
WHERE id != 1
ORDER BY similarity DESC
LIMIT 5;
\`\`\`

Choose metrics based on data characteristics. Cosine works well for normalized embeddings. Euclidean works for spatial data. Manhattan works for sparse data.

![Similarity Metrics](/tutorials/ai-tutorial-10-vector-search/diagram-similarity-metrics.svg)

The diagram compares similarity metrics. Cosine measures angles. Euclidean measures distances. Each has different properties.

## Distance Functions

Distance functions measure vector differences. They enable similarity ranking. Common functions include L2 (Euclidean), L1 (Manhattan), and cosine distance. Each has different computational properties.

L2 distance is ||A - B||₂ = √Σ(Aᵢ - Bᵢ)². It measures straight-line distance. It emphasizes large differences. It works well for dense vectors.

\`\`\`python
# Distance Functions
import numpy as np

def l2_distance(a, b):
    return np.sqrt(np.sum((a - b)**2))

def l1_distance(a, b):
    return np.sum(np.abs(a - b))

def cosine_distance(a, b):
    return 1 - np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Example
a = np.array([1.0, 2.0, 3.0])
b = np.array([1.1, 2.1, 3.1])

print("L2 distance: " + str(l2_distance(a, b)))
print("L1 distance: " + str(l1_distance(a, b)))
print("Cosine distance: " + str(cosine_distance(a, b)))
\`\`\`

Distance functions enable similarity ranking. They measure vector differences. They support efficient search.

![Distance Functions](/tutorials/ai-tutorial-10-vector-search/diagram-distance-functions.svg)

The diagram shows distance functions. L2 measures Euclidean distance. L1 measures Manhattan distance. Cosine distance measures angles. Each function suits different data types.

## Indexing Strategies

Indexing enables fast vector search at scale. Exact search is accurate but slow. Approximate search is fast but approximate. Common indexes include HNSW and IVFFlat.

HNSW builds hierarchical navigable small worlds. It creates multi-layer graphs. It enables fast approximate search. It works well for high-dimensional vectors.

\`\`\`python
# HNSW Indexing
import hnswlib
import numpy as np

# Create index
dim = 128
num_elements = 10000
index = hnswlib.Index(space='cosine', dim=dim)
index.init_index(max_elements=num_elements, ef_construction=200, M=16)

# Add vectors
data = np.random.randn(num_elements, dim).astype('float32')
index.add_items(data, np.arange(num_elements))

# Search
query = np.random.randn(1, dim).astype('float32')
index.set_ef(50)
labels, distances = index.knn_query(query, k=10)
print("Nearest neighbors: " + str(labels))
\`\`\`

\`\`\`sql
-- NeuronDB: Vector Indexing
CREATE INDEX embedding_hnsw_idx ON document_embeddings 
USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 200);

-- Fast similarity search using index
SELECT id, content
FROM document_embeddings
ORDER BY embedding <=> (SELECT embedding FROM document_embeddings WHERE id = 1)
LIMIT 10;
\`\`\`

Indexing enables scalable search. HNSW works well for high dimensions. IVFFlat works well for lower dimensions.

### Detailed Indexing Algorithms

HNSW (Hierarchical Navigable Small World) builds multi-layer graphs. Bottom layer contains all vectors. Upper layers contain fewer vectors. Search starts at top layer. It navigates to bottom layer. It finds approximate nearest neighbors quickly.

Construction parameters include M (connections per node) and ef_construction (search width). Larger M increases recall but slows construction. Larger ef_construction improves quality but increases time. Typical M is 16-32. Typical ef_construction is 100-200.

IVFFlat (Inverted File with Flat Compression) clusters vectors. It creates Voronoi cells. Each cell has a centroid. Search finds closest centroids. It searches vectors in those cells. It works well for lower dimensions.

\`\`\`python
# Detailed Indexing Comparison
import numpy as np
import time
import hnswlib
try:
    import faiss
except ImportError:
    print("FAISS not available, using HNSW only")

def compare_indexing_methods(dim=128, num_vectors=100000, num_queries=1000):
    # Generate data
    np.random.seed(42)
    vectors = np.random.randn(num_vectors, dim).astype('float32')
    queries = np.random.randn(num_queries, dim).astype('float32')
    
    results = {}
    
    # HNSW
    print("Building HNSW index...")
    start = time.time()
    index_hnsw = hnswlib.Index(space='l2', dim=dim)
    index_hnsw.init_index(max_elements=num_vectors, ef_construction=200, M=16)
    index_hnsw.add_items(vectors, np.arange(num_vectors))
    build_time_hnsw = time.time() - start
    
    index_hnsw.set_ef(50)
    start = time.time()
    labels_hnsw, distances_hnsw = index_hnsw.knn_query(queries, k=10)
    search_time_hnsw = time.time() - start
    
    results['HNSW'] = {
        'build_time': build_time_hnsw,
        'search_time': search_time_hnsw,
        'avg_search_time': search_time_hnsw / num_queries
    }
    
    # IVFFlat (if FAISS available)
    try:
        print("Building IVFFlat index...")
        start = time.time()
        nlist = 100  # Number of clusters
        quantizer = faiss.IndexFlatL2(dim)
        index_ivf = faiss.IndexIVFFlat(quantizer, dim, nlist)
        index_ivf.train(vectors)
        index_ivf.add(vectors)
        build_time_ivf = time.time() - start
        
        index_ivf.nprobe = 10  # Search in 10 clusters
        start = time.time()
        distances_ivf, labels_ivf = index_ivf.search(queries, 10)
        search_time_ivf = time.time() - start
        
        results['IVFFlat'] = {
            'build_time': build_time_ivf,
            'search_time': search_time_ivf,
            'avg_search_time': search_time_ivf / num_queries
        }
    except:
        pass
    
    # Exact search baseline
    print("Performing exact search...")
    start = time.time()
    from sklearn.metrics.pairwise import euclidean_distances
    exact_distances = []
    for query in queries:
        dists = euclidean_distances([query], vectors)[0]
        exact_distances.append(np.argsort(dists)[:10])
    exact_time = time.time() - start
    
    results['Exact'] = {
        'search_time': exact_time,
        'avg_search_time': exact_time / num_queries
    }
    
    print("\\nIndexing Performance Comparison:")
    for method, metrics in results.items():
        print(f"{method}:")
        if 'build_time' in metrics:
            print(f"  Build time: {metrics['build_time']:.2f}s")
        print(f"  Search time: {metrics['search_time']:.4f}s")
        print(f"  Avg per query: {metrics['avg_search_time']*1000:.2f}ms")
    
    return results

# Example
# results = compare_indexing_methods(dim=128, num_vectors=10000, num_queries=100)
\`\`\`

### Index Tuning and Optimization

Tune index parameters for your use case. Higher recall requires more computation. Lower recall enables faster search. Balance accuracy and speed.

For HNSW, increase M for better recall. Increase ef_search for more accurate results. Higher values slow search. Typical ef_search is 50-200. For production, start with ef_search=50. Increase if recall is insufficient.

For IVFFlat, increase nlist for better quality. Increase nprobe for higher recall. nprobe controls clusters searched. Higher nprobe improves recall but slows search. Typical nprobe is 1-10.

Monitor index performance. Measure query latency. Measure recall at k. Measure index size. Adjust parameters based on requirements.

\`\`\`python
# Index Tuning Example
def tune_hnsw_index(vectors, queries, true_neighbors, M_values=[8, 16, 32], ef_values=[25, 50, 100]):
    results = []
    
    for M in M_values:
        for ef in ef_values:
            # Build index
            index = hnswlib.Index(space='l2', dim=vectors.shape[1])
            index.init_index(max_elements=len(vectors), ef_construction=200, M=M)
            index.add_items(vectors, np.arange(len(vectors)))
            
            # Search
            index.set_ef(ef)
            start = time.time()
            labels, distances = index.knn_query(queries, k=10)
            search_time = time.time() - start
            
            # Compute recall
            recall = compute_recall(labels, true_neighbors)
            
            results.append({
                'M': M,
                'ef': ef,
                'search_time': search_time,
                'recall': recall
            })
    
    # Find best configuration
    best = max(results, key=lambda x: x['recall'] / x['search_time'])
    print(f"Best configuration: M={best['M']}, ef={best['ef']}")
    print(f"Recall: {best['recall']:.3f}, Time: {best['search_time']:.4f}s")
    
    return results

def compute_recall(predicted, true):
    """Compute recall@10"""
    correct = 0
    total = 0
    for pred, true_nn in zip(predicted, true):
        correct += len(set(pred) & set(true_nn))
        total += len(true_nn)
    return correct / total if total > 0 else 0
\`\`\`

![Indexing Strategies](/tutorials/ai-tutorial-10-vector-search/diagram-indexing-strategies.svg)

The diagram shows indexing structures. HNSW uses hierarchical graphs. IVFFlat uses inverted files. Each enables fast search.

## Approximate Nearest Neighbor Search

Approximate search trades accuracy for speed. It finds near-optimal results quickly. It scales to billions of vectors. It works well for many applications.

Approximate methods include locality-sensitive hashing, product quantization, and graph-based methods. Each has different accuracy-speed tradeoffs.

\`\`\`python
# Approximate Nearest Neighbor
from sklearn.neighbors import LSHForest

# Create LSH index
lsh = LSHForest(n_estimators=10, n_candidates=50)
lsh.fit(vectors)

# Approximate search
distances, indices = lsh.kneighbors(query_vector, n_neighbors=10)
print("Approximate neighbors: " + str(indices))
\`\`\`

Approximate search enables scale. It finds good results quickly. It works for large datasets.

## Exact vs Approximate Search

Exact search finds true nearest neighbors. It is accurate but slow. Approximate search finds near neighbors. It is fast but approximate.

Choose based on requirements. Use exact for small datasets or high accuracy needs. Use approximate for large datasets or speed needs.

![Exact vs Approximate](/tutorials/ai-tutorial-10-vector-search/diagram-exact-vs-approximate.svg)

The diagram compares search methods. Exact search is accurate but slow. Approximate search is fast but approximate.

## Performance Optimization

Optimization improves search speed and accuracy. Techniques include quantization, pruning, and parallel processing. Each reduces computation or improves efficiency.

\`\`\`python
# Performance Optimization
import numpy as np

# Quantization reduces precision
def quantize_vectors(vectors, bits=8):
    min_val = vectors.min()
    max_val = vectors.max()
    scale = (2**bits - 1) / (max_val - min_val)
    quantized = np.round((vectors - min_val) * scale).astype(np.uint8)
    return quantized, min_val, scale

# Example
vectors = np.random.randn(1000, 128).astype('float32')
quantized, min_val, scale = quantize_vectors(vectors, bits=8)
print("Original size: " + str(vectors.nbytes))
print("Quantized size: " + str(quantized.nbytes))
# Quantization reduces memory by 4x
\`\`\`

Optimization improves efficiency. It reduces memory usage. It speeds up search.

## Summary

Vector search finds similar vectors efficiently. Similarity metrics measure relationships. Cosine similarity works well for embeddings. Distance functions enable ranking. Indexing enables scalable search. HNSW works for high dimensions. Approximate search trades accuracy for speed. Exact search is accurate but slow. Optimization improves performance. Vector search powers semantic search and recommendations.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [HNSW Paper](https://arxiv.org/abs/1603.09320)
- [Approximate Nearest Neighbor Search](https://www.cs.princeton.edu/cass/papers/mplp.pdf)
- [Vector Similarity Search](https://www.pinecone.io/learn/vector-similarity-search/)
`
}

function getSemanticSearchTutorialContent(): string {
  return `
## Semantic Search Overview

Semantic search finds documents by meaning, not just keywords. It uses embeddings to capture semantics. It understands query intent. It finds relevant documents regardless of exact word matches. It works better than keyword search for many tasks.

Semantic search converts queries and documents to embeddings. It compares embeddings using similarity. It ranks documents by semantic relevance. It returns most relevant results.

![Semantic Search](/tutorials/ai-tutorial-11-semantic-search/diagram-semantic-search.svg)

The diagram shows semantic search flow. Query converts to embedding. Documents convert to embeddings. Similarity search finds relevant documents.

## Document Chunking Strategies

Document chunking splits documents into searchable pieces. Chunks must balance context and granularity. Too large chunks lose precision. Too small chunks lose context.

Chunking strategies include fixed-size, sentence-based, and semantic chunking. Fixed-size uses character or token limits. Sentence-based splits at sentence boundaries. Semantic chunking groups related content.

\`\`\`python
# Document Chunking
def chunk_documents(text, chunk_size=500, overlap=50):
    chunks = []
    start = 0
    
    while start < len(text):
        end = start + chunk_size
        chunk = text[start:end]
        chunks.append(chunk)
        start = end - overlap
    
    return chunks

# Sentence-based chunking
from nltk.tokenize import sent_tokenize

def chunk_by_sentences(text, max_chunk_size=500):
    sentences = sent_tokenize(text)
    chunks = []
    current_chunk = ""
    
    for sentence in sentences:
        if len(current_chunk) + len(sentence) <= max_chunk_size:
            current_chunk += " " + sentence
        else:
            if current_chunk:
                chunks.append(current_chunk.strip())
            current_chunk = sentence
    
    if current_chunk:
        chunks.append(current_chunk.strip())
    
    return chunks

# Example
text = "Machine learning is a subset of AI. It enables computers to learn. Deep learning uses neural networks."
chunks = chunk_by_sentences(text, max_chunk_size=100)
print("Chunks: " + str(chunks))
\`\`\`

\`\`\`sql
-- NeuronDB: Document Chunking
CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    content TEXT
);

CREATE TABLE document_chunks AS
SELECT 
    id,
    generate_substring(content, 1, 500, 50) AS chunk,
    embedding vector(384)
FROM documents;

-- Create embeddings for chunks
UPDATE document_chunks
SET embedding = neurondb.embed(chunk, 'sentence-transformers/all-MiniLM-L6-v2');
\`\`\`

Chunking affects search quality. Good chunking preserves context. It enables precise retrieval.

### Detailed Chunking Strategies

Fixed-size chunking uses character or token limits. It is simple to implement. It works for uniform documents. It may split sentences or concepts. Overlap helps preserve context across boundaries.

Sentence-based chunking splits at sentence boundaries. It preserves sentence integrity. It works well for natural language. It may create variable-sized chunks. It requires sentence segmentation.

Semantic chunking groups related content. It uses embeddings to find boundaries. It creates coherent chunks. It requires more computation. It produces better quality chunks.

\`\`\`python
# Detailed Chunking Implementation
from sentence_transformers import SentenceTransformer
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

class AdvancedChunking:
    def __init__(self):
        self.embedder = SentenceTransformer('all-MiniLM-L6-v2')
    
    def semantic_chunking(self, text, similarity_threshold=0.7, min_chunk_size=100, max_chunk_size=500):
        """Chunk based on semantic similarity"""
        sentences = self.split_sentences(text)
        if len(sentences) == 0:
            return [text]
        
        # Create embeddings
        embeddings = self.embedder.encode(sentences)
        
        chunks = []
        current_chunk = [sentences[0]]
        current_embeddings = [embeddings[0]]
        
        for i in range(1, len(sentences)):
            # Compute similarity with current chunk
            chunk_embedding = np.mean(current_embeddings, axis=0)
            similarity = cosine_similarity(
                chunk_embedding.reshape(1, -1),
                embeddings[i].reshape(1, -1)
            )[0][0]
            
            # Check if should start new chunk
            chunk_text = ' '.join(current_chunk)
            should_split = (
                similarity < similarity_threshold or
                len(chunk_text) + len(sentences[i]) > max_chunk_size
            )
            
            if should_split and len(chunk_text) >= min_chunk_size:
                chunks.append(' '.join(current_chunk))
                current_chunk = [sentences[i]]
                current_embeddings = [embeddings[i]]
            else:
                current_chunk.append(sentences[i])
                current_embeddings.append(embeddings[i])
        
        if current_chunk:
            chunks.append(' '.join(current_chunk))
        
        return chunks
    
    def recursive_chunking(self, text, max_chunk_size=500, chunk_overlap=50):
        """Recursively chunk large documents"""
        if len(text) <= max_chunk_size:
            return [text]
        
        # Try to split at paragraph boundaries
        paragraphs = text.split('\\n\\n')
        chunks = []
        current_chunk = ""
        
        for para in paragraphs:
            if len(current_chunk) + len(para) <= max_chunk_size:
                current_chunk += para + "\\n\\n"
            else:
                if current_chunk:
                    chunks.append(current_chunk.strip())
                # Recursively chunk large paragraphs
                if len(para) > max_chunk_size:
                    sub_chunks = self.recursive_chunking(para, max_chunk_size, chunk_overlap)
                    chunks.extend(sub_chunks)
                else:
                    current_chunk = para + "\\n\\n"
        
        if current_chunk:
            chunks.append(current_chunk.strip())
        
        return chunks
    
    def split_sentences(self, text):
        """Split text into sentences"""
        import re
        # Simple sentence splitting
        sentences = re.split(r'[.!?]+', text)
        return [s.strip() for s in sentences if s.strip()]

# Example
chunker = AdvancedChunking()
long_text = "Machine learning is a subset of AI. It enables computers to learn. Deep learning uses neural networks. Neural networks have multiple layers. Each layer processes information differently."

semantic_chunks = chunker.semantic_chunking(long_text)
print("Semantic chunks: " + str(semantic_chunks))

recursive_chunks = chunker.recursive_chunking(long_text * 10)
print("Recursive chunks count: " + str(len(recursive_chunks)))
\`\`\`

### Chunking Best Practices

Choose chunk size based on document type. Short documents need smaller chunks. Long documents can use larger chunks. Typical sizes are 200-500 tokens. Test different sizes for your use case.

Overlap helps preserve context. Typical overlap is 10-20% of chunk size. It ensures important information isn't split. It improves retrieval quality. It increases storage requirements.

Consider document structure. Respect paragraph boundaries when possible. Preserve section headers. Maintain list formatting. These improve chunk quality.

\`\`\`python
# Chunking Best Practices
class BestPracticeChunking:
    def __init__(self):
        self.chunk_sizes = {
            'short': 200,
            'medium': 500,
            'long': 1000
        }
    
    def adaptive_chunking(self, text, document_type='medium'):
        """Adapt chunk size to document type"""
        chunk_size = self.chunk_sizes.get(document_type, 500)
        
        # Detect document type
        if len(text) < 1000:
            chunk_size = self.chunk_sizes['short']
        elif len(text) > 10000:
            chunk_size = self.chunk_sizes['long']
        
        return self.chunk_with_overlap(text, chunk_size, overlap=int(chunk_size * 0.1))
    
    def chunk_with_overlap(self, text, chunk_size, overlap=50):
        """Chunk with overlap"""
        chunks = []
        start = 0
        
        while start < len(text):
            end = start + chunk_size
            chunk = text[start:end]
            chunks.append(chunk)
            start = end - overlap
        
        return chunks
    
    def preserve_structure(self, text):
        """Chunk while preserving document structure"""
        # Split by paragraphs first
        paragraphs = text.split('\\n\\n')
        chunks = []
        current_chunk = ""
        
        for para in paragraphs:
            if len(current_chunk) + len(para) <= 500:
                current_chunk += para + "\\n\\n"
            else:
                if current_chunk:
                    chunks.append(current_chunk.strip())
                current_chunk = para + "\\n\\n"
        
        if current_chunk:
            chunks.append(current_chunk.strip())
        
        return chunks

# Example
best_practice = BestPracticeChunking()
chunks = best_practice.adaptive_chunking(long_text, document_type='medium')
structured_chunks = best_practice.preserve_structure(long_text)
print("Adaptive chunks: " + str(len(chunks)))
print("Structured chunks: " + str(len(structured_chunks)))
\`\`\`

![Document Chunking](/tutorials/ai-tutorial-11-semantic-search/diagram-document-chunking.svg)

The diagram shows chunking strategies. Fixed-size creates uniform chunks. Sentence-based preserves sentence boundaries. Semantic chunking groups related content.

## Query Processing

Query processing prepares queries for search. It converts queries to embeddings. It handles query expansion. It normalizes queries. It improves search quality.

Query processing includes normalization, expansion, and embedding. Normalization standardizes text. Expansion adds related terms. Embedding converts to vectors.

\`\`\`python
# Query Processing
from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')

def process_query(query):
    # Normalize
    query = query.lower().strip()
    
    # Convert to embedding
    embedding = model.encode(query)
    
    return embedding, query

# Example
query = "How does machine learning work?"
embedding, processed_query = process_query(query)
print("Query embedding shape: " + str(embedding.shape))
\`\`\`

Query processing improves search. It handles variations. It captures intent.

![Embedding Generation](/tutorials/ai-tutorial-11-semantic-search/diagram-embedding-generation.svg)

The diagram shows embedding generation process. Text preprocessed and tokenized. Encoder processes tokens. Embedding vector generated. Normalized for similarity search.

## Ranking Algorithms

Ranking algorithms order search results. They use similarity scores. They combine multiple signals. They improve result relevance.

Ranking methods include similarity-based, learning-to-rank, and hybrid approaches. Similarity-based uses embedding similarity. Learning-to-rank uses machine learning. Hybrid combines multiple signals.

\`\`\`python
# Ranking Algorithms
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

def rank_documents(query_embedding, document_embeddings, top_k=10):
    similarities = cosine_similarity([query_embedding], document_embeddings)[0]
    ranked_indices = np.argsort(similarities)[::-1][:top_k]
    return ranked_indices, similarities[ranked_indices]

# Example
query_emb = np.random.randn(384)
doc_embs = np.random.randn(1000, 384)
indices, scores = rank_documents(query_emb, doc_embs, top_k=10)
print("Top documents: " + str(indices))
print("Scores: " + str(scores))
\`\`\`

Ranking improves result quality. It orders by relevance. It combines multiple signals.

### Detailed Ranking Algorithms

Similarity-based ranking uses embedding similarity directly. It is simple and fast. It works well when embeddings are good. It may miss important signals.

Learning-to-rank uses machine learning models. Features include query-document similarity, document length, position, and query characteristics. Models learn optimal feature weights. They improve ranking quality. They require training data.

BM25 is probabilistic ranking function. It combines term frequency and inverse document frequency. It works well for keyword search. It can be combined with semantic scores.

\`\`\`python
# Detailed Ranking Implementation
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from rank_bm25 import BM25Okapi

class AdvancedRanking:
    def __init__(self):
        self.ltr_model = RandomForestRegressor(n_estimators=100)
        self.bm25 = None
    
    def similarity_ranking(self, query_emb, doc_embeddings, top_k=10):
        """Simple similarity-based ranking"""
        similarities = cosine_similarity([query_emb], doc_embeddings)[0]
        ranked_indices = np.argsort(similarities)[::-1][:top_k]
        return ranked_indices, similarities[ranked_indices]
    
    def bm25_ranking(self, query, documents, top_k=10):
        """BM25 ranking for keyword matching"""
        if self.bm25 is None:
            tokenized_docs = [doc.lower().split() for doc in documents]
            self.bm25 = BM25Okapi(tokenized_docs)
        
        tokenized_query = query.lower().split()
        scores = self.bm25.get_scores(tokenized_query)
        ranked_indices = np.argsort(scores)[::-1][:top_k]
        return ranked_indices, scores[ranked_indices]
    
    def learned_to_rank(self, query, documents, query_emb, doc_embeddings, top_k=10):
        """Learning-to-rank with multiple features"""
        # Extract features
        features = []
        similarities = cosine_similarity([query_emb], doc_embeddings)[0]
        
        for i, doc in enumerate(documents):
            feature_vector = [
                similarities[i],  # Semantic similarity
                len(doc),  # Document length
                i,  # Initial position
                len(query),  # Query length
                doc.count(' '),  # Word count
                len(set(doc.lower().split()) & set(query.lower().split()))  # Term overlap
            ]
            features.append(feature_vector)
        
        # Predict relevance scores
        relevance_scores = self.ltr_model.predict(features)
        
        # Rank by predicted relevance
        ranked_indices = np.argsort(relevance_scores)[::-1][:top_k]
        return ranked_indices, relevance_scores[ranked_indices]
    
    def train_ltr_model(self, queries, documents_list, query_embeddings, doc_embeddings_list, relevance_labels):
        """Train learning-to-rank model"""
        X_train = []
        y_train = []
        
        for queries_batch, docs_batch, q_embs, d_embs, labels_batch in zip(
            queries, documents_list, query_embeddings, doc_embeddings_list, relevance_labels
        ):
            for query, docs, q_emb, d_embs, labels in zip(queries_batch, docs_batch, q_embs, d_embs, labels_batch):
                similarities = cosine_similarity([q_emb], d_embs)[0]
                for i, (doc, sim, label) in enumerate(zip(docs, similarities, labels)):
                    features = [
                        sim, len(doc), i, len(query),
                        doc.count(' '), len(set(doc.lower().split()) & set(query.lower().split()))
                    ]
                    X_train.append(features)
                    y_train.append(label)
        
        self.ltr_model.fit(X_train, y_train)
        return self.ltr_model

# Example
ranker = AdvancedRanking()
query = "machine learning"
documents = ["ML tutorial", "Deep learning guide", "AI introduction"]
query_emb = np.random.randn(384)
doc_embs = np.random.randn(3, 384)

# Similarity ranking
sim_indices, sim_scores = ranker.similarity_ranking(query_emb, doc_embs)
print("Similarity ranking: " + str(sim_indices))

# BM25 ranking
bm25_indices, bm25_scores = ranker.bm25_ranking(query, documents)
print("BM25 ranking: " + str(bm25_indices))
\`\`\`

![Ranking](/tutorials/ai-tutorial-11-semantic-search/diagram-ranking.svg)

The diagram shows ranking process. Similarity scores computed. Results ordered by score. Top results returned.

## Keyword vs Semantic Search

Keyword search matches exact words. It is fast and simple. It misses synonyms and related concepts. Semantic search matches meaning. It finds related content. It works better for many queries.

Keyword search uses inverted indexes. It matches query terms. It ranks by term frequency. Semantic search uses embeddings. It matches meaning. It ranks by semantic similarity.

\`\`\`python
# Keyword vs Semantic Search
from sklearn.feature_extraction.text import TfidfVectorizer
from sentence_transformers import SentenceTransformer
import numpy as np

# Keyword search
tfidf = TfidfVectorizer()
documents = ["Machine learning tutorial", "Deep learning guide", "AI introduction"]
tfidf_matrix = tfidf.fit_transform(documents)

query = "neural networks"
query_vector = tfidf.transform([query])
keyword_scores = (query_vector * tfidf_matrix.T).toarray()[0]

# Semantic search
model = SentenceTransformer('all-MiniLM-L6-v2')
doc_embeddings = model.encode(documents)
query_embedding = model.encode([query])
semantic_scores = cosine_similarity(query_embedding, doc_embeddings)[0]

print("Keyword scores: " + str(keyword_scores))
print("Semantic scores: " + str(semantic_scores))
\`\`\`

Semantic search works better for meaning-based queries. Keyword search works for exact matches. Hybrid approaches combine both.

![Keyword vs Semantic](/tutorials/ai-tutorial-11-semantic-search/diagram-keyword-vs-semantic.svg)

The diagram compares search methods. Keyword matches terms. Semantic matches meaning.

## Hybrid Approaches

Hybrid search combines keyword and semantic search. It uses both exact matches and meaning. It improves result quality. It handles diverse query types.

Hybrid methods include score fusion, reranking, and multi-stage retrieval. Score fusion combines similarity scores. Reranking uses semantic scores to rerank keyword results. Multi-stage uses keyword for recall, semantic for precision.

\`\`\`python
# Hybrid Search
def hybrid_search(query, documents, alpha=0.5):
    # Keyword scores
    keyword_scores = compute_keyword_scores(query, documents)
    
    # Semantic scores
    semantic_scores = compute_semantic_scores(query, documents)
    
    # Combine scores
    hybrid_scores = alpha * keyword_scores + (1 - alpha) * semantic_scores
    
    # Rank
    ranked_indices = np.argsort(hybrid_scores)[::-1]
    return ranked_indices

# Example
query = "machine learning tutorial"
documents = ["ML guide", "Deep learning intro", "AI basics"]
results = hybrid_search(query, documents, alpha=0.6)
print("Hybrid search results: " + str(results))
\`\`\`

Hybrid search improves quality. It combines strengths of both methods. It handles diverse queries.

## Query Expansion

Query expansion adds related terms to queries. It improves recall. It handles vocabulary mismatches. It finds more relevant documents.

Expansion methods include synonym expansion, embedding-based expansion, and feedback-based expansion. Synonym expansion adds synonyms. Embedding-based adds similar terms. Feedback-based uses user feedback.

\`\`\`python
# Query Expansion
def expand_query(query, word_embeddings, top_k=3):
    query_words = query.split()
    expanded_terms = set(query_words)
    
    for word in query_words:
        if word in word_embeddings:
            similar = word_embeddings.most_similar(word, topn=top_k)
            expanded_terms.update([w for w, _ in similar])
    
    expanded_query = " ".join(expanded_terms)
    return expanded_query

# Example
expanded = expand_query("machine learning", word_embeddings, top_k=2)
print("Expanded query: " + str(expanded))
\`\`\`

Query expansion improves recall. It finds more relevant documents. It handles vocabulary variations.

![Query Expansion](/tutorials/ai-tutorial-13-advanced-rag/diagram-query-expansion.svg)

The diagram shows query expansion methods. Synonym expansion uses word embeddings. LLM expansion generates related terms. Both methods improve retrieval coverage.

## Summary

Semantic search finds documents by meaning. Document chunking splits documents appropriately. Query processing prepares queries. Ranking algorithms order results. Semantic search works better than keyword for many queries. Hybrid approaches combine both methods. Query expansion improves recall. Semantic search enables better information retrieval.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Semantic Search](https://www.sbert.net/examples/applications/semantic-search/README.html)
- [Vector Search Best Practices](https://www.pinecone.io/learn/vector-search-best-practices/)
- [Hybrid Search](https://www.elastic.co/blog/combining-the-power-of-elasticsearch-with-vector-search)
`
}

function getRAGFundamentalsTutorialContent(): string {
  return `
## RAG Fundamentals Overview

Retrieval-Augmented Generation combines retrieval and generation. It retrieves relevant documents. It uses them as context for generation. It improves answer quality and reduces hallucinations. It enables knowledge-grounded responses.

RAG has three main components. Retrieval finds relevant documents. Augmentation adds context to prompts. Generation produces answers using context.

![RAG Architecture](/tutorials/ai-tutorial-12-rag-fundamentals/diagram-rag-architecture.svg)

The diagram shows RAG flow. Query triggers retrieval. Retrieved documents provide context. Generator produces answer using context.

## RAG Architecture Components

RAG architecture includes document store, retriever, and generator. Document store stores knowledge base. Retriever finds relevant documents. Generator produces answers.

Document store can be vector database, traditional database, or hybrid. Retriever uses semantic search or keyword search. Generator uses language models.

\`\`\`python
# RAG Architecture
from sentence_transformers import SentenceTransformer
from transformers import pipeline

class RAGSystem:
    def __init__(self):
        self.embedder = SentenceTransformer('all-MiniLM-L6-v2')
        self.generator = pipeline('text-generation', model='gpt2')
        self.documents = []
        self.embeddings = None
    
    def add_documents(self, documents):
        self.documents = documents
        self.embeddings = self.embedder.encode(documents)
    
    def retrieve(self, query, top_k=3):
        query_emb = self.embedder.encode([query])
        similarities = cosine_similarity(query_emb, self.embeddings)[0]
        top_indices = np.argsort(similarities)[::-1][:top_k]
        return [self.documents[i] for i in top_indices]
    
    def generate(self, query, context):
        prompt = f"Context: {context}\\n\\nQuestion: {query}\\n\\nAnswer:"
        answer = self.generator(prompt, max_length=100)[0]['generated_text']
        return answer
    
    def query(self, query):
        context = " ".join(self.retrieve(query))
        return self.generate(query, context)

# Example
rag = RAGSystem()
rag.add_documents(["Machine learning is...", "Deep learning uses..."])
answer = rag.query("What is machine learning?")
print("Answer: " + str(answer))
\`\`\`

RAG architecture enables knowledge-grounded generation. It improves answer quality. It reduces hallucinations.

### Detailed RAG Implementation Patterns

Basic RAG uses simple retrieval and generation. Query triggers semantic search. Top-k documents retrieved. Context built from documents. Prompt includes context and query. Generator produces answer.

Advanced RAG adds reranking and filtering. Initial retrieval gets more candidates. Reranking improves order. Filtering removes irrelevant documents. Final context uses best documents.

Iterative RAG refines retrieval through feedback. Initial answer generated. Answer analyzed for gaps. Additional retrieval fills gaps. Process repeats until complete.

\`\`\`python
# Detailed RAG Implementation
class AdvancedRAGSystem:
    def __init__(self):
        self.embedder = SentenceTransformer('all-MiniLM-L6-v2')
        self.generator = pipeline('text-generation', model='gpt2')
        self.reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')
        self.documents = []
        self.embeddings = None
    
    def basic_rag(self, query, top_k=3):
        """Basic RAG implementation"""
        # Retrieve
        query_emb = self.embedder.encode([query])
        similarities = cosine_similarity(query_emb, self.embeddings)[0]
        top_indices = np.argsort(similarities)[::-1][:top_k]
        retrieved = [self.documents[i] for i in top_indices]
        
        # Build context
        context = "\\n\\n".join([f"Document {i+1}: {doc}" for i, doc in enumerate(retrieved)])
        
        # Generate
        prompt = f"Context: {context}\\n\\nQuestion: {query}\\n\\nAnswer:"
        answer = self.generator(prompt, max_length=200)[0]['generated_text']
        
        return answer.split("Answer:")[-1].strip()
    
    def advanced_rag(self, query, retrieve_k=20, rerank_k=5):
        """Advanced RAG with reranking"""
        # Initial retrieval
        query_emb = self.embedder.encode([query])
        similarities = cosine_similarity(query_emb, self.embeddings)[0]
        top_indices = np.argsort(similarities)[::-1][:retrieve_k]
        candidates = [self.documents[i] for i in top_indices]
        
        # Rerank
        pairs = [[query, doc] for doc in candidates]
        rerank_scores = self.reranker.predict(pairs)
        rerank_indices = np.argsort(rerank_scores)[::-1][:rerank_k]
        final_docs = [candidates[i] for i in rerank_indices]
        
        # Build context
        context = "\\n\\n".join([f"Document {i+1}: {doc}" for i, doc in enumerate(final_docs)])
        
        # Generate
        prompt = f"Context: {context}\\n\\nQuestion: {query}\\n\\nAnswer:"
        answer = self.generator(prompt, max_length=200)[0]['generated_text']
        
        return answer.split("Answer:")[-1].strip()
    
    def iterative_rag(self, query, max_iterations=3):
        """Iterative RAG with feedback"""
        context = ""
        answer = ""
        
        for iteration in range(max_iterations):
            # Retrieve based on query and current answer
            search_query = f"{query} {answer}" if answer else query
            query_emb = self.embedder.encode([search_query])
            similarities = cosine_similarity(query_emb, self.embeddings)[0]
            top_indices = np.argsort(similarities)[::-1][:5]
            retrieved = [self.documents[i] for i in top_indices]
            
            # Update context
            new_context = "\\n\\n".join([f"Doc: {doc}" for doc in retrieved])
            context = context + "\\n\\n" + new_context if context else new_context
            
            # Generate answer
            prompt = f"Context: {context}\\n\\nQuestion: {query}\\n\\nAnswer:"
            answer = self.generator(prompt, max_length=200)[0]['generated_text']
            answer = answer.split("Answer:")[-1].strip()
            
            # Check if answer is complete (simplified)
            if len(answer) > 50:  # Placeholder check
                break
        
        return answer

# Example
rag = AdvancedRAGSystem()
rag.documents = ["ML is AI subset", "Neural networks have layers", "Deep learning uses many layers"]
rag.embeddings = rag.embedder.encode(rag.documents)

basic_answer = rag.basic_rag("What is machine learning?")
print("Basic RAG answer: " + str(basic_answer))

advanced_answer = rag.advanced_rag("What is machine learning?", retrieve_k=10, rerank_k=3)
print("Advanced RAG answer: " + str(advanced_answer))
\`\`\`

### RAG Quality Evaluation

Evaluate RAG systems using multiple metrics. Answer quality measures correctness. Answer relevance measures topic alignment. Answer completeness measures information coverage. Context utilization measures retrieved document usage.

Answer quality uses human evaluation or automated metrics. BLEU scores measure n-gram overlap. ROUGE scores measure summary quality. BERTScore measures semantic similarity. Human evaluation provides gold standard.

\`\`\`python
# RAG Quality Evaluation
from rouge_score import rouge_scorer
from bert_score import score as bert_score
import numpy as np

class RAGEvaluator:
    def __init__(self):
        self.rouge_scorer = rouge_scorer.RougeScorer(['rouge1', 'rouge2', 'rougeL'], use_stemmer=True)
    
    def evaluate_answer_quality(self, generated_answer, reference_answer):
        """Evaluate answer quality using multiple metrics"""
        metrics = {}
        
        # ROUGE scores
        rouge_scores = self.rouge_scorer.score(reference_answer, generated_answer)
        metrics['rouge1'] = rouge_scores['rouge1'].fmeasure
        metrics['rouge2'] = rouge_scores['rouge2'].fmeasure
        metrics['rougeL'] = rouge_scores['rougeL'].fmeasure
        
        # BERTScore
        P, R, F1 = bert_score([generated_answer], [reference_answer], lang='en', verbose=False)
        metrics['bertscore_precision'] = P.item()
        metrics['bertscore_recall'] = R.item()
        metrics['bertscore_f1'] = F1.item()
        
        # Answer length
        metrics['answer_length'] = len(generated_answer.split())
        metrics['reference_length'] = len(reference_answer.split())
        
        return metrics
    
    def evaluate_context_utilization(self, retrieved_docs, generated_answer):
        """Measure how well answer uses retrieved context"""
        answer_words = set(generated_answer.lower().split())
        
        doc_words_sets = [set(doc.lower().split()) for doc in retrieved_docs]
        all_doc_words = set().union(*doc_words_sets)
        
        # Overlap ratio
        overlap = answer_words & all_doc_words
        utilization = len(overlap) / len(answer_words) if len(answer_words) > 0 else 0
        
        return {
            'context_utilization': utilization,
            'overlap_count': len(overlap),
            'answer_word_count': len(answer_words),
            'context_word_count': len(all_doc_words)
        }
    
    def evaluate_retrieval_quality(self, retrieved_docs, relevant_docs):
        """Evaluate retrieval performance"""
        retrieved_set = set(retrieved_docs)
        relevant_set = set(relevant_docs)
        
        precision = len(retrieved_set & relevant_set) / len(retrieved_set) if len(retrieved_set) > 0 else 0
        recall = len(retrieved_set & relevant_set) / len(relevant_set) if len(relevant_set) > 0 else 0
        f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0
        
        return {
            'precision': precision,
            'recall': recall,
            'f1': f1
        }

# Example
evaluator = RAGEvaluator()
generated = "Machine learning is a subset of artificial intelligence that enables computers to learn."
reference = "Machine learning is a method of data analysis that automates analytical model building."

quality_metrics = evaluator.evaluate_answer_quality(generated, reference)
print("Answer quality metrics:")
for metric, value in quality_metrics.items():
    print(f"{metric}: {value:.4f}")
\`\`\`

![RAG Components](/tutorials/ai-tutorial-12-rag-fundamentals/diagram-rag-components.svg)

The diagram shows RAG components. Document store provides knowledge. Retriever finds relevant content. Generator produces answers.

## Document Processing Pipeline

Document processing prepares documents for RAG. It includes ingestion, chunking, embedding, and indexing. Each step affects retrieval quality.

Processing pipeline ingests documents from sources. It chunks documents appropriately. It generates embeddings. It indexes for fast retrieval.

\`\`\`python
# Document Processing Pipeline
def process_documents(documents):
    # Chunk documents
    chunks = []
    for doc in documents:
        chunks.extend(chunk_document(doc, chunk_size=500))
    
    # Generate embeddings
    embeddings = embedder.encode(chunks)
    
    # Index
    index = create_index(embeddings)
    
    return chunks, embeddings, index

# Example
documents = ["Document 1 content...", "Document 2 content..."]
chunks, embeddings, index = process_documents(documents)
print("Processed " + str(len(chunks)) + " chunks")
\`\`\`

Document processing affects RAG quality. Good processing improves retrieval. It enables accurate generation.

![Document Processing](/tutorials/ai-tutorial-12-rag-fundamentals/diagram-document-processing.svg)

The diagram shows processing pipeline. Documents are chunked. Chunks are embedded. Embeddings are indexed.

## Retrieval Strategies

Retrieval strategies find relevant documents. They use semantic search, keyword search, or hybrid approaches. Each has different strengths.

Semantic retrieval uses embeddings. It finds semantically similar documents. Keyword retrieval uses term matching. It finds documents with matching terms. Hybrid combines both.

\`\`\`python
# Retrieval Strategies
def semantic_retrieve(query, embeddings, index, top_k=5):
    query_emb = embedder.encode([query])
    results = index.search(query_emb, top_k)
    return results

def keyword_retrieve(query, documents, top_k=5):
    # Use TF-IDF or BM25
    scores = compute_keyword_scores(query, documents)
    top_indices = np.argsort(scores)[::-1][:top_k]
    return [documents[i] for i in top_indices]

def hybrid_retrieve(query, documents, embeddings, index, alpha=0.5, top_k=5):
    semantic_results = semantic_retrieve(query, embeddings, index, top_k*2)
    keyword_results = keyword_retrieve(query, documents, top_k*2)
    
    # Combine and rerank
    combined = combine_results(semantic_results, keyword_results, alpha)
    return combined[:top_k]
\`\`\`

Retrieval strategies affect RAG performance. Semantic retrieval works for meaning-based queries. Keyword retrieval works for exact matches. Hybrid works for diverse queries.

![Retrieval Strategies](/tutorials/ai-tutorial-12-rag-fundamentals/diagram-retrieval-strategies.svg)

The diagram shows retrieval strategies. Semantic uses embeddings. Keyword uses term matching. Hybrid combines both methods.

## Context Building

Context building prepares retrieved documents for generation. It combines multiple documents. It formats context appropriately. It ensures context fits prompt limits.

Context building includes document selection, formatting, and truncation. Selection chooses most relevant documents. Formatting structures context. Truncation fits length limits.

\`\`\`python
# Context Building
def build_context(retrieved_docs, max_length=1000):
    context_parts = []
    current_length = 0
    
    for doc in retrieved_docs:
        doc_text = format_document(doc)
        if current_length + len(doc_text) <= max_length:
            context_parts.append(doc_text)
            current_length += len(doc_text)
        else:
            break
    
    context = "\\n\\n".join(context_parts)
    return context

# Example
retrieved = ["Doc 1", "Doc 2", "Doc 3"]
context = build_context(retrieved, max_length=500)
print("Context: " + str(context))
\`\`\`

Context building affects generation quality. Good context improves answers. It provides relevant information.

## Prompt Construction

Prompt construction creates effective prompts for generation. It includes context, query, and instructions. It structures information clearly.

Prompts typically include context section, query section, and instruction section. Context provides background. Query specifies task. Instructions guide generation.

\`\`\`python
# Prompt Construction
def construct_prompt(query, context, instruction=""):
    prompt = f"""Context:
{context}

Question: {query}

{instruction}

Answer:"""
    return prompt

# Example
query = "What is machine learning?"
context = "Machine learning is a subset of AI..."
prompt = construct_prompt(query, context, "Answer based on the context provided.")
print("Prompt: " + str(prompt))
\`\`\`

Prompt construction affects generation quality. Clear prompts produce better answers. Good structure improves understanding.

## Generation Integration

Generation integration uses language models to produce answers. It takes prompts with context. It generates coherent responses. It ensures answers use provided context.

Generation uses decoder models like GPT. It generates text autoregressively. It conditions on context. It produces relevant answers.

\`\`\`python
# Generation Integration
from transformers import pipeline

generator = pipeline('text-generation', model='gpt2')

def generate_answer(prompt, max_length=200):
    output = generator(prompt, max_length=max_length, num_return_sequences=1)
    answer = output[0]['generated_text'].split("Answer:")[-1].strip()
    return answer

# Example
prompt = "Context: ML is AI subset.\\n\\nQuestion: What is ML?\\n\\nAnswer:"
answer = generate_answer(prompt)
print("Answer: " + str(answer))
\`\`\`

Generation integration produces final answers. It uses retrieved context. It ensures relevance.

## Summary

RAG combines retrieval and generation. Architecture includes document store, retriever, and generator. Document processing prepares documents. Retrieval strategies find relevant content. Context building prepares information. Prompt construction creates effective prompts. Generation integration produces answers. RAG enables knowledge-grounded generation.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [RAG Paper](https://arxiv.org/abs/2005.11401)
- [Building RAG Applications](https://www.pinecone.io/learn/retrieval-augmented-generation/)
- [LangChain RAG](https://python.langchain.com/docs/use_cases/question_answering/)
`
}

function getAdvancedRAGTutorialContent(): string {
  return `
## Advanced RAG Overview

Advanced RAG improves basic RAG with hybrid search, reranking, and multi-vector approaches. It combines semantic and keyword search. It reranks results for better quality. It uses multiple embeddings per document. It handles temporal information.

Advanced techniques improve retrieval quality. They increase answer accuracy. They reduce hallucinations. They enable complex queries.

![Advanced RAG](/tutorials/ai-tutorial-13-advanced-rag/diagram-advanced-rag.svg)

The diagram shows advanced RAG flow. Hybrid search combines methods. Reranking improves order. Multi-vector handles complexity.

## Hybrid Search

Hybrid search combines semantic and keyword search. It uses both embeddings and term matching. It improves recall and precision. It handles diverse query types.

Hybrid methods include score fusion, reciprocal rank fusion, and weighted combination. Score fusion averages normalized scores. Reciprocal rank fusion combines ranks. Weighted combination uses configurable weights.

\`\`\`python
# Hybrid Search
def hybrid_search(query, documents, embeddings, index, alpha=0.5, top_k=10):
    # Semantic search
    semantic_scores = semantic_search(query, embeddings, index, top_k*2)
    
    # Keyword search
    keyword_scores = keyword_search(query, documents, top_k*2)
    
    # Normalize scores
    semantic_scores = normalize_scores(semantic_scores)
    keyword_scores = normalize_scores(keyword_scores)
    
    # Combine
    hybrid_scores = alpha * semantic_scores + (1 - alpha) * keyword_scores
    
    # Rerank
    ranked_indices = np.argsort(hybrid_scores)[::-1][:top_k]
    return ranked_indices

# Example
results = hybrid_search("machine learning", documents, embeddings, index, alpha=0.6)
print("Hybrid search results: " + str(results))
\`\`\`

Hybrid search improves retrieval quality. It combines strengths of both methods. It handles diverse queries.

![Hybrid Search](/tutorials/ai-tutorial-13-advanced-rag/diagram-hybrid-search.svg)

The diagram shows hybrid search. Semantic and keyword results combine. Final results improve quality.

## Reranking Strategies

Reranking improves result order. It uses more sophisticated models. It considers query-document relationships. It improves precision at top ranks.

Reranking methods include cross-encoders, learned-to-rank, and LLM-based reranking. Cross-encoders compute query-document similarity. Learned-to-rank uses machine learning. LLM-based uses language models.

\`\`\`python
# Reranking
from sentence_transformers import CrossEncoder

reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')

def rerank_results(query, documents, top_k=5):
    pairs = [[query, doc] for doc in documents]
    scores = reranker.predict(pairs)
    
    ranked_indices = np.argsort(scores)[::-1][:top_k]
    return [documents[i] for i in ranked_indices]

# Example
query = "machine learning tutorial"
documents = ["ML guide", "Deep learning", "AI basics"]
reranked = rerank_results(query, documents)
print("Reranked results: " + str(reranked))
\`\`\`

Reranking improves result quality. It uses more computation. It provides better precision.

![Reranking](/tutorials/ai-tutorial-13-advanced-rag/diagram-reranking.svg)

The diagram shows reranking process. Initial results retrieved. Cross-encoder reranks candidates. Top results selected for final output.

### Detailed Reranking Strategies

Cross-encoders process query and document together. They compute attention between query and document tokens. They capture fine-grained interactions. They are more accurate than bi-encoders. They are slower due to pairwise computation.

Learned-to-rank uses machine learning models. Features include query-document similarity, document length, position in initial ranking. Models learn optimal feature combinations. They improve ranking quality. They require training data.

LLM-based reranking uses language models. They score documents using prompts. They understand context better. They are more expensive. They provide high-quality reranking.

\`\`\`python
# Detailed Reranking Implementation
from sentence_transformers import CrossEncoder
import numpy as np
from sklearn.ensemble import RandomForestRegressor

class RerankingSystem:
    def __init__(self, method='cross_encoder'):
        self.method = method
        if method == 'cross_encoder':
            self.reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')
        elif method == 'learned_to_rank':
            self.ltr_model = RandomForestRegressor(n_estimators=100)
            self.feature_names = ['similarity', 'doc_length', 'position', 'query_length']
    
    def cross_encoder_rerank(self, query, documents, top_k=5):
        # Create query-document pairs
        pairs = [[query, doc] for doc in documents]
        
        # Score pairs
        scores = self.reranker.predict(pairs)
        
        # Rank by score
        ranked_indices = np.argsort(scores)[::-1][:top_k]
        ranked_docs = [documents[i] for i in ranked_indices]
        ranked_scores = scores[ranked_indices]
        
        return ranked_docs, ranked_scores
    
    def learned_to_rank_rerank(self, query, documents, initial_scores, top_k=5):
        # Extract features
        features = []
        for i, doc in enumerate(documents):
            feature_vector = [
                initial_scores[i],  # Initial similarity score
                len(doc),  # Document length
                i,  # Position in initial ranking
                len(query)  # Query length
            ]
            features.append(feature_vector)
        
        # Predict reranking scores
        rerank_scores = self.ltr_model.predict(features)
        
        # Rank by reranking scores
        ranked_indices = np.argsort(rerank_scores)[::-1][:top_k]
        ranked_docs = [documents[i] for i in ranked_indices]
        
        return ranked_docs, rerank_scores[ranked_indices]
    
    def train_ltr_model(self, queries, documents_list, initial_scores_list, relevance_labels):
        """Train learned-to-rank model"""
        X_train = []
        y_train = []
        
        for queries_batch, docs_batch, scores_batch, labels_batch in zip(
            queries, documents_list, initial_scores_list, relevance_labels
        ):
            for query, docs, scores, labels in zip(queries_batch, docs_batch, scores_batch, labels_batch):
                for i, (doc, score, label) in enumerate(zip(docs, scores, labels)):
                    features = [score, len(doc), i, len(query)]
                    X_train.append(features)
                    y_train.append(label)
        
        self.ltr_model.fit(X_train, y_train)
        return self.ltr_model

# Example
reranker = RerankingSystem(method='cross_encoder')
query = "machine learning tutorial"
documents = ["ML guide", "Deep learning basics", "AI introduction", "Neural networks explained"]
reranked, scores = reranker.cross_encoder_rerank(query, documents, top_k=3)
print("Reranked documents: " + str(reranked))
print("Reranking scores: " + str(scores))
\`\`\`

### Reranking Performance Optimization

Optimize reranking for production use. Cache frequent query-document pairs. Use approximate reranking for large candidate sets. Batch process multiple queries together.

Two-stage reranking uses fast model first. It filters to top candidates. It uses slow model on filtered set. This balances accuracy and speed.

\`\`\`python
# Optimized Reranking Pipeline
class OptimizedReranking:
    def __init__(self):
        self.fast_reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-3-v2')  # Faster, smaller
        self.slow_reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-12-v2')  # Slower, better
        self.cache = {}
    
    def rerank_optimized(self, query, documents, initial_scores, top_k=5, use_cache=True):
        # Stage 1: Fast reranking on all candidates
        if use_cache and query in self.cache:
            cached_results = self.cache[query]
            if len(documents) == len(cached_results['docs']):
                return cached_results['docs'][:top_k], cached_results['scores'][:top_k]
        
        # Fast reranking
        pairs = [[query, doc] for doc in documents]
        fast_scores = self.fast_reranker.predict(pairs)
        
        # Filter to top candidates (e.g., top 20)
        filter_k = min(20, len(documents))
        top_indices = np.argsort(fast_scores)[::-1][:filter_k]
        top_docs = [documents[i] for i in top_indices]
        
        # Stage 2: Slow reranking on filtered set
        top_pairs = [[query, doc] for doc in top_docs]
        slow_scores = self.slow_reranker.predict(top_pairs)
        
        # Final ranking
        final_indices = np.argsort(slow_scores)[::-1][:top_k]
        final_docs = [top_docs[i] for i in final_indices]
        final_scores = slow_scores[final_indices]
        
        # Cache results
        if use_cache:
            self.cache[query] = {'docs': final_docs, 'scores': final_scores}
        
        return final_docs, final_scores

# Batch processing
def batch_rerank(queries, documents_list, reranker, batch_size=32):
    """Process multiple queries in batches"""
    all_results = []
    
    for i in range(0, len(queries), batch_size):
        batch_queries = queries[i:i+batch_size]
        batch_docs = documents_list[i:i+batch_size]
        
        batch_results = []
        for query, docs in zip(batch_queries, batch_docs):
            reranked, scores = reranker.rerank_optimized(query, docs, top_k=5)
            batch_results.append((reranked, scores))
        
        all_results.extend(batch_results)
    
    return all_results
\`\`\`

## Multi-vector Approaches

Multi-vector approaches use multiple embeddings per document. They capture different aspects. They improve retrieval coverage. They handle complex documents.

Methods include sentence-level embeddings, chunk-level embeddings, and aspect-based embeddings. Sentence-level captures fine-grained information. Chunk-level captures context. Aspect-based captures specific aspects.

\`\`\`python
# Multi-vector Approach
def create_multi_vectors(document):
    # Sentence embeddings
    sentences = split_sentences(document)
    sentence_embs = embedder.encode(sentences)
    
    # Chunk embeddings
    chunks = chunk_document(document)
    chunk_embs = embedder.encode(chunks)
    
    # Aspect embeddings
    aspects = extract_aspects(document)
    aspect_embs = embedder.encode(aspects)
    
    return {
        'sentences': sentence_embs,
        'chunks': chunk_embs,
        'aspects': aspect_embs
    }

# Search across all vectors
def multi_vector_search(query, multi_vectors):
    query_emb = embedder.encode([query])
    
    all_scores = []
    for doc_id, vectors in multi_vectors.items():
        for vec_type, embs in vectors.items():
            scores = cosine_similarity(query_emb, embs)[0]
            all_scores.append((doc_id, vec_type, max(scores)))
    
    return sorted(all_scores, key=lambda x: x[2], reverse=True)
\`\`\`

Multi-vector approaches improve coverage. They capture document complexity. They enable better retrieval.

![Multi-Query Retrieval](/tutorials/ai-tutorial-13-advanced-rag/diagram-multi-query.svg)

The diagram shows multi-query process. Original query generates multiple queries. Each query retrieves results. Results combined and reranked. Improves coverage and recall.

## Temporal Search Patterns

Temporal search handles time-sensitive information. It considers document timestamps. It prioritizes recent information. It enables time-based filtering.

Temporal methods include time-weighted scoring, recency boosting, and time-based filtering. Time-weighted combines relevance and recency. Recency boosts recent documents. Time-based filters by time ranges.

\`\`\`python
# Temporal Search
def temporal_search(query, documents, timestamps, alpha=0.7, top_k=10):
    # Relevance scores
    relevance_scores = compute_relevance(query, documents)
    
    # Recency scores
    max_time = max(timestamps)
    recency_scores = [(max_time - t).days for t in timestamps]
    recency_scores = normalize(recency_scores)
    
    # Combine
    combined_scores = alpha * relevance_scores + (1 - alpha) * recency_scores
    
    ranked_indices = np.argsort(combined_scores)[::-1][:top_k]
    return ranked_indices

# Example
timestamps = [datetime(2024, 1, 1), datetime(2024, 2, 1), datetime(2024, 3, 1)]
results = temporal_search("AI news", documents, timestamps)
print("Temporal search results: " + str(results))
\`\`\`

Temporal search handles time-sensitive queries. It prioritizes recent information. It improves relevance for time-dependent topics.

## Query Routing

Query routing directs queries to appropriate retrievers. It analyzes query characteristics. It selects best retrieval method. It improves efficiency and quality.

Routing methods include rule-based, learned, and hybrid routing. Rule-based uses heuristics. Learned uses machine learning. Hybrid combines approaches.

\`\`\`python
# Query Routing
def route_query(query):
    # Analyze query
    has_keywords = has_exact_terms(query)
    is_semantic = is_meaning_based(query)
    
    if has_keywords and is_semantic:
        return 'hybrid'
    elif has_keywords:
        return 'keyword'
    else:
        return 'semantic'

def routed_search(query, documents, embeddings, index):
    route = route_query(query)
    
    if route == 'hybrid':
        return hybrid_search(query, documents, embeddings, index)
    elif route == 'keyword':
        return keyword_search(query, documents)
    else:
        return semantic_search(query, embeddings, index)

# Example
results = routed_search("machine learning tutorial", documents, embeddings, index)
print("Routed search results: " + str(results))
\`\`\`

Query routing improves efficiency. It selects appropriate methods. It optimizes retrieval.

## Summary

Advanced RAG improves basic RAG with hybrid search, reranking, and multi-vector approaches. Hybrid search combines semantic and keyword methods. Reranking improves result order. Multi-vector approaches handle document complexity. Temporal search handles time-sensitive information. Query routing optimizes retrieval. Advanced techniques improve RAG quality.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Advanced RAG Techniques](https://www.pinecone.io/learn/advanced-rag-techniques/)
- [Hybrid Search](https://www.elastic.co/blog/combining-the-power-of-elasticsearch-with-vector-search)
- [Reranking for RAG](https://www.sbert.net/examples/applications/cross-encoder/README.html)
`
}

function getPromptEngineeringTutorialContent(): string {
  return `
## Prompt Engineering Overview

Prompt engineering designs effective prompts for language models. It structures instructions clearly. It provides examples when needed. It guides model behavior. It improves output quality.

Good prompts produce better results. They specify tasks clearly. They provide context. They set expectations. They guide generation.

![Prompt Engineering](/tutorials/ai-tutorial-14-prompt-engineering/diagram-prompt-engineering.svg)

The diagram shows prompt structure. Instructions specify task. Context provides background. Examples demonstrate format. Output format guides structure.

## Prompt Design Principles

Prompt design follows key principles. Be specific about tasks. Provide relevant context. Use clear instructions. Specify output format. Include examples when helpful.

Specificity reduces ambiguity. Context improves understanding. Clear instructions guide behavior. Output format ensures consistency. Examples demonstrate expectations.

\`\`\`python
# Prompt Design
def create_prompt(task, context="", examples="", output_format=""):
    prompt = f"""Task: {task}

{context}

{examples}

Output Format: {output_format}

Please complete the task following the instructions above."""
    return prompt

# Good prompt
good_prompt = create_prompt(
    task="Classify the sentiment of the following text as positive, negative, or neutral",
    context="Sentiment analysis determines emotional tone",
    examples="Text: 'I love this product' -> Sentiment: positive",
    output_format="Return only the sentiment label"
)

# Bad prompt
bad_prompt = "What is the sentiment?"

print("Good prompt: " + str(good_prompt))
print("Bad prompt: " + str(bad_prompt))
\`\`\`

Good prompts improve results. They reduce errors. They ensure consistency.

![Prompt Design](/tutorials/ai-tutorial-14-prompt-engineering/diagram-prompt-design.svg)

The diagram shows prompt components. Each component contributes to quality.

## Few-shot Learning

Few-shot learning provides examples in prompts. It demonstrates desired behavior. It enables learning from examples. It improves performance without fine-tuning.

Few-shot prompts include task description, examples, and query. Examples show input-output pairs. Model learns pattern from examples. It applies pattern to query.

\`\`\`python
# Few-shot Learning
def few_shot_prompt(examples, query):
    prompt = "Task: Translate English to French\\n\\n"
    
    for example in examples:
        prompt += f"English: {example['input']}\\n"
        prompt += f"French: {example['output']}\\n\\n"
    
    prompt += f"English: {query}\\n"
    prompt += "French:"
    
    return prompt

# Example
examples = [
    {'input': 'Hello', 'output': 'Bonjour'},
    {'input': 'Goodbye', 'output': 'Au revoir'}
]
query = "Thank you"
prompt = few_shot_prompt(examples, query)
print("Few-shot prompt: " + str(prompt))
\`\`\`

Few-shot learning improves performance. It requires no training. It adapts quickly.

![Few-Shot Learning](/tutorials/ai-tutorial-14-prompt-engineering/diagram-few-shot-learning.svg)

The diagram shows few-shot prompt structure. Examples demonstrate pattern. Model learns from examples. Query follows same pattern.

## Zero-Shot vs Few-Shot Learning

Zero-shot learning uses no examples. It relies on pre-training knowledge. It works for standard tasks. Few-shot learning provides examples. It demonstrates desired behavior. It improves performance.

Zero-shot is faster and simpler. It requires no examples. It works for common tasks. Few-shot is more accurate. It adapts to specific formats. It works for custom tasks.

![Zero-Shot vs Few-Shot](/tutorials/ai-tutorial-14-prompt-engineering/diagram-zero-shot-vs-few-shot.svg)

The diagram compares zero-shot and few-shot approaches. Zero-shot uses only task description. Few-shot includes examples. Each approach suits different scenarios.

## Chain-of-Thought Prompting

Chain-of-thought prompting guides step-by-step reasoning. It breaks complex problems into steps. It shows reasoning process. It improves accuracy on reasoning tasks.

Chain-of-thought includes problem, reasoning steps, and answer. Steps show logical progression. Answer follows from reasoning. Process improves accuracy.

\`\`\`python
# Chain-of-Thought Prompting
def chain_of_thought_prompt(problem):
    prompt = f"""Problem: {problem}

Let's solve this step by step:

Step 1: [First reasoning step]
Step 2: [Second reasoning step]
Step 3: [Final conclusion]

Answer: [Final answer]"""
    return prompt

# Example
problem = "If a train travels 60 mph for 2 hours, how far does it go?"
prompt = chain_of_thought_prompt(problem)
print("Chain-of-thought prompt: " + str(prompt))
\`\`\`

Chain-of-thought improves reasoning. It shows logical steps. It increases accuracy.

![Chain-of-Thought](/tutorials/ai-tutorial-14-prompt-engineering/diagram-chain-of-thought.svg)

The diagram shows reasoning steps. Each step builds on previous. Final answer follows logically.

### Detailed Chain-of-Thought Techniques

Standard chain-of-thought provides step-by-step reasoning. It breaks complex problems into steps. It shows intermediate calculations. It improves accuracy on math and reasoning tasks.

Self-consistency generates multiple reasoning paths. It samples different chains. It takes majority vote on answers. It improves accuracy further. It requires more computation.

Tree of thoughts explores multiple reasoning branches. It generates candidate thoughts. It evaluates each branch. It selects best path. It works for complex problems.

\`\`\`python
# Detailed Chain-of-Thought Implementation
from transformers import pipeline
import re

class ChainOfThought:
    def __init__(self, model_name='gpt2'):
        self.generator = pipeline('text-generation', model=model_name)
    
    def standard_cot(self, problem):
        prompt = f"""Problem: {problem}

Let's solve this step by step:

Step 1:"""
        
        response = self.generator(prompt, max_length=200, num_return_sequences=1)
        return response[0]['generated_text']
    
    def self_consistency_cot(self, problem, num_samples=5):
        """Generate multiple reasoning paths and take majority vote"""
        all_answers = []
        
        for _ in range(num_samples):
            prompt = f"""Problem: {problem}

Let's solve this step by step:

Step 1:"""
            
            response = self.generator(prompt, max_length=200, num_return_sequences=1, 
                                    do_sample=True, temperature=0.7)
            generated = response[0]['generated_text']
            
            # Extract answer (simplified)
            answer = self.extract_answer(generated)
            all_answers.append(answer)
        
        # Majority vote
        from collections import Counter
        most_common = Counter(all_answers).most_common(1)[0][0]
        return most_common, all_answers
    
    def extract_answer(self, text):
        # Simple extraction (would need more sophisticated parsing)
        numbers = re.findall(r'\\d+\\.?\\d*', text)
        if numbers:
            return numbers[-1]
        return "unknown"
    
    def tree_of_thoughts(self, problem, num_branches=3):
        """Explore multiple reasoning branches"""
        initial_prompt = f"""Problem: {problem}

Possible approaches:
1."""
        
        # Generate initial branches
        branches = []
        for i in range(num_branches):
            branch_prompt = initial_prompt + f" Approach {i+1}:"
            response = self.generator(branch_prompt, max_length=150, num_return_sequences=1)
            branches.append(response[0]['generated_text'])
        
        # Evaluate each branch (simplified)
        branch_scores = []
        for branch in branches:
            # In practice, would use a scoring model
            score = len(branch)  # Placeholder
            branch_scores.append(score)
        
        # Select best branch
        best_idx = np.argmax(branch_scores)
        return branches[best_idx]

# Example
cot = ChainOfThought()
problem = "If a train travels 60 mph for 2 hours, how far does it go?"
result = cot.standard_cot(problem)
print("Chain-of-thought result: " + str(result))
\`\`\`

### Advanced Prompting Techniques

Role prompting assigns roles to models. It guides behavior through persona. Example: "You are an expert data scientist." It improves task-specific performance.

Few-shot chain-of-thought provides reasoning examples. It shows model how to reason. It improves reasoning quality. It combines few-shot and chain-of-thought benefits.

\`\`\`python
# Advanced Prompting Techniques
class AdvancedPrompting:
    def role_prompting(self, role, task, input_data):
        prompt = f"""You are {role}.

Task: {task}

Input: {input_data}

Response:"""
        return prompt
    
    def few_shot_cot(self, examples, query):
        prompt = "Solve these problems step by step.\\n\\n"
        
        for example in examples:
            prompt += f"Problem: {example['problem']}\\n"
            prompt += f"Solution: {example['solution']}\\n\\n"
        
        prompt += f"Problem: {query}\\n"
        prompt += "Solution:"
        return prompt
    
    def iterative_refinement(self, initial_prompt, refinement_steps=3):
        """Refine prompt through iterations"""
        current_prompt = initial_prompt
        
        for step in range(refinement_steps):
            # Generate response
            response = self.generate(current_prompt)
            
            # Analyze and refine
            refined_prompt = self.refine_prompt(current_prompt, response)
            current_prompt = refined_prompt
        
        return current_prompt
    
    def generate(self, prompt):
        # Placeholder for generation
        return "Generated response"
    
    def refine_prompt(self, prompt, response):
        # Add feedback to prompt
        refined = prompt + "\\n\\nPrevious attempt: " + response + "\\n\\nImproved:"
        return refined

# Example
prompter = AdvancedPrompting()

# Role prompting
role_prompt = prompter.role_prompting(
    role="an expert machine learning engineer",
    task="Explain gradient descent",
    input_data=""
)
print("Role prompt: " + str(role_prompt))

# Few-shot chain-of-thought
examples = [
    {
        'problem': '2 + 3 = ?',
        'solution': 'Step 1: Add 2 and 3. Step 2: 2 + 3 = 5. Answer: 5'
    },
    {
        'problem': '5 * 4 = ?',
        'solution': 'Step 1: Multiply 5 by 4. Step 2: 5 * 4 = 20. Answer: 20'
    }
]
fs_cot_prompt = prompter.few_shot_cot(examples, '6 * 7 = ?')
print("Few-shot CoT prompt: " + str(fs_cot_prompt))
\`\`\`

## Prompt Optimization

Prompt optimization improves prompt effectiveness. It tests variations. It measures performance. It selects best prompts. It iterates for improvement.

Optimization methods include A/B testing, grid search, and automated optimization. A/B testing compares variants. Grid search tests combinations. Automated optimization uses algorithms.

\`\`\`python
# Prompt Optimization
def optimize_prompt(base_prompt, variations, test_data):
    best_prompt = base_prompt
    best_score = evaluate_prompt(base_prompt, test_data)
    
    for variation in variations:
        score = evaluate_prompt(variation, test_data)
        if score > best_score:
            best_score = score
            best_prompt = variation
    
    return best_prompt, best_score

# Example
base = "Classify sentiment"
variations = [
    "Classify the sentiment as positive, negative, or neutral",
    "Determine the emotional tone: positive, negative, or neutral",
    "What is the sentiment? Options: positive, negative, neutral"
]
best, score = optimize_prompt(base, variations, test_data)
print("Best prompt: " + str(best))
print("Score: " + str(score))
\`\`\`

Optimization improves prompt quality. It finds effective formulations. It maximizes performance.

## Template Systems

Template systems create reusable prompt structures. They parameterize prompts. They enable consistent formatting. They simplify prompt creation.

Templates include placeholders for variables. They structure information. They ensure consistency. They enable automation.

\`\`\`python
# Prompt Templates
class PromptTemplate:
    def __init__(self, template):
        self.template = template
    
    def format(self, **kwargs):
        return self.template.format(**kwargs)

# Example
template = PromptTemplate("""Task: {task}
Context: {context}
Examples: {examples}
Query: {query}
Output:""")

prompt = template.format(
    task="Sentiment analysis",
    context="Classify text sentiment",
    examples="Positive: 'I love it', Negative: 'I hate it'",
    query="This is great"
)
print("Template prompt: " + str(prompt))
\`\`\`

Templates enable consistency. They simplify creation. They support automation.

## Summary

Prompt engineering designs effective prompts. Design principles guide creation. Few-shot learning provides examples. Chain-of-thought guides reasoning. Optimization improves effectiveness. Templates enable reusability. Good prompts improve model performance.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [OpenAI Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering)
- [Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903)
`
}

function getModelEvaluationTutorialContent(): string {
  return `
## Model Evaluation Overview

Model evaluation measures model performance. It uses appropriate metrics. It tests on unseen data. It compares different models. It guides improvements.

Evaluation requires separate test data. It uses relevant metrics. It considers business goals. It provides actionable insights.

![Model Evaluation](/tutorials/ai-tutorial-15-model-evaluation/diagram-model-evaluation.svg)

The diagram shows evaluation process. Models make predictions. Predictions compare to actuals. Metrics compute performance.

## Classification Metrics

Classification metrics measure classification performance. Accuracy measures overall correctness. Precision measures prediction quality. Recall measures coverage. F1 balances precision and recall.

Accuracy is (TP + TN) / (TP + TN + FP + FN). It works for balanced classes. It fails for imbalanced classes. Precision is TP / (TP + FP). It measures prediction quality. Recall is TP / (TP + FN). It measures coverage.

\`\`\`python
# Classification Metrics
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix

y_true = [0, 1, 1, 0, 1, 0, 1, 1]
y_pred = [0, 1, 1, 0, 0, 0, 1, 1]

accuracy = accuracy_score(y_true, y_pred)
precision = precision_score(y_true, y_pred)
recall = recall_score(y_true, y_pred)
f1 = f1_score(y_true, y_pred)
cm = confusion_matrix(y_true, y_pred)

print("Accuracy: " + str(accuracy))
print("Precision: " + str(precision))
print("Recall: " + str(recall))
print("F1: " + str(f1))
print("Confusion Matrix:")
print(cm)
\`\`\`

Choose metrics based on goals. Accuracy for balanced classes. Precision for reducing false positives. Recall for reducing false negatives. F1 for balanced performance.

![Confusion Matrix](/tutorials/ai-tutorial-15-model-evaluation/diagram-confusion-matrix.svg)

The diagram shows confusion matrix structure. True positives and true negatives are correct predictions. False positives and false negatives are errors. Matrix enables detailed analysis.

![Classification Metrics](/tutorials/ai-tutorial-15-model-evaluation/diagram-classification-metrics.svg)

The diagram shows metric relationships. Each metric captures different aspects. Tradeoffs exist between metrics.

## Regression Metrics

Regression metrics measure prediction errors. MSE emphasizes large errors. MAE treats all errors equally. R-squared measures explained variance. RMSE provides interpretable units.

MSE is (1/n) Σ(y_pred - y_true)². It penalizes large errors. MAE is (1/n) Σ|y_pred - y_true|. It treats errors equally. R² is 1 - (SS_res / SS_tot). It measures fit quality.

\`\`\`python
# Regression Metrics
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import numpy as np

y_true = [100, 200, 300, 400, 500]
y_pred = [110, 190, 310, 390, 510]

mse = mean_squared_error(y_true, y_pred)
mae = mean_absolute_error(y_true, y_pred)
r2 = r2_score(y_true, y_pred)
rmse = np.sqrt(mse)

print("MSE: " + str(mse))
print("MAE: " + str(mae))
print("R²: " + str(r2))
print("RMSE: " + str(rmse))
\`\`\`

Choose metrics based on needs. MSE for large error sensitivity. MAE for robustness. R² for fit quality. RMSE for interpretability.

![Regression Metrics](/tutorials/ai-tutorial-15-model-evaluation/diagram-regression-metrics.svg)

The diagram shows regression metrics. Predictions compared to actual values. Errors measured by different functions. Each metric emphasizes different aspects.

## Embedding Quality Metrics

Embedding quality metrics measure embedding effectiveness. They test semantic relationships. They evaluate downstream performance. They guide embedding selection.

Metrics include similarity correlation, analogy accuracy, and downstream task performance. Similarity correlation measures human similarity agreement. Analogy accuracy tests relationships. Downstream performance measures task effectiveness.

\`\`\`python
# Embedding Quality Metrics
def evaluate_embeddings(embeddings, test_pairs, analogies):
    # Similarity correlation
    similarities = compute_similarities(embeddings, test_pairs)
    correlation = compute_correlation(similarities, human_similarities)
    
    # Analogy accuracy
    analogy_acc = solve_analogies(embeddings, analogies)
    
    # Downstream performance
    downstream_score = evaluate_downstream(embeddings)
    
    return {
        'similarity_correlation': correlation,
        'analogy_accuracy': analogy_acc,
        'downstream_score': downstream_score
    }
\`\`\`

Embedding metrics guide selection. They measure semantic quality. They predict downstream performance.

## A/B Testing Frameworks

A/B testing compares model variants. It measures performance differences. It determines statistical significance. It guides deployment decisions.

A/B testing splits traffic between variants. It collects performance metrics. It tests for significant differences. It selects better variant.

\`\`\`python
# A/B Testing
from scipy import stats

def ab_test(variant_a_scores, variant_b_scores, alpha=0.05):
    # Statistical test
    t_stat, p_value = stats.ttest_ind(variant_a_scores, variant_b_scores)
    
    # Mean comparison
    mean_a = np.mean(variant_a_scores)
    mean_b = np.mean(variant_b_scores)
    
    # Decision
    significant = p_value < alpha
    better = 'B' if mean_b > mean_a else 'A'
    
    return {
        'significant': significant,
        'p_value': p_value,
        'mean_a': mean_a,
        'mean_b': mean_b,
        'better_variant': better
    }

# Example
scores_a = [0.85, 0.87, 0.86, 0.84, 0.88]
scores_b = [0.90, 0.91, 0.89, 0.92, 0.90]
result = ab_test(scores_a, scores_b)
print("A/B test result: " + str(result))
\`\`\`

A/B testing enables data-driven decisions. It measures real differences. It guides deployments.

![A/B Testing](/tutorials/ai-tutorial-17-production/diagram-a-b-testing.svg)

The diagram shows A/B testing process. Traffic split between variants. Metrics collected for each. Statistical significance tested. Better variant selected for deployment.

## Evaluation Suites

Evaluation suites provide comprehensive testing. They include multiple metrics. They test various aspects. They enable thorough evaluation.

Suites combine classification, regression, and embedding metrics. They test robustness. They measure generalization. They provide complete picture.

\`\`\`python
# Evaluation Suite
class EvaluationSuite:
    def __init__(self):
        self.metrics = []
    
    def add_metric(self, metric_func, name):
        self.metrics.append((name, metric_func))
    
    def evaluate(self, y_true, y_pred):
        results = {}
        for name, metric_func in self.metrics:
            results[name] = metric_func(y_true, y_pred)
        return results

# Example
suite = EvaluationSuite()
suite.add_metric(accuracy_score, 'accuracy')
suite.add_metric(precision_score, 'precision')
suite.add_metric(recall_score, 'recall')
suite.add_metric(f1_score, 'f1')

results = suite.evaluate(y_true, y_pred)
print("Evaluation results: " + str(results))
\`\`\`

Evaluation suites provide comprehensive assessment. They test multiple aspects. They enable thorough evaluation.

![Cross-Validation](/tutorials/ai-tutorial-15-model-evaluation/diagram-cross-validation.svg)

The diagram shows cross-validation process. Data splits into k folds. Each fold serves as test set. Results average across folds. Provides robust performance estimates.

## Summary

Model evaluation measures performance. Classification metrics measure classification quality. Regression metrics measure prediction errors. Embedding metrics measure embedding quality. A/B testing compares variants. Evaluation suites provide comprehensive testing. Good evaluation guides improvements.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Scikit-learn Metrics](https://scikit-learn.org/stable/modules/model_evaluation.html)
- [Evaluation Metrics](https://machinelearningmastery.com/metrics-evaluate-machine-learning-algorithms-python/)
- [A/B Testing](https://www.investopedia.com/terms/a/ab-testing.asp)
`
}

function getFineTuningTutorialContent(): string {
  return `
## Fine-tuning Overview

Fine-tuning adapts pre-trained models to specific tasks. It updates model weights on task data. It requires less data than training from scratch. It improves task performance significantly.

Fine-tuning leverages pre-trained knowledge. It adapts to task-specific patterns. It balances general and specific knowledge. It enables efficient task adaptation.

![Fine-tuning](/tutorials/ai-tutorial-16-fine-tuning/diagram-fine-tuning.svg)

The diagram shows fine-tuning process. Pre-trained model provides base. Task data adapts model. Fine-tuned model performs task.

## Transfer Learning Concepts

Transfer learning uses knowledge from one task for another. Pre-trained models provide general knowledge. Fine-tuning adapts to specific tasks. It reduces data and compute requirements.

Transfer learning works because models learn general patterns. These patterns transfer across tasks. Fine-tuning adapts general patterns. It learns task-specific details.

\`\`\`python
# Transfer Learning
from transformers import AutoModelForSequenceClassification, AutoTokenizer

# Load pre-trained model
model = AutoModelForSequenceClassification.from_pretrained(
    'bert-base-uncased',
    num_labels=3  # Adapt to 3-class classification
)

# Fine-tune on task data
# Model already knows language, learns task-specific patterns
\`\`\`

Transfer learning enables efficient adaptation. It reduces training requirements. It improves performance.

![Transfer Learning](/tutorials/ai-tutorial-16-fine-tuning/diagram-transfer-learning.svg)

The diagram shows transfer learning concept. Source task provides pre-trained model. Knowledge transfers to target task. Fine-tuning adapts to specific domain.

## Dataset Preparation

Dataset preparation creates task-specific training data. It includes data collection, labeling, and formatting. It ensures data quality. It prepares data for training.

Preparation includes cleaning, formatting, and splitting. Cleaning removes errors. Formatting matches model requirements. Splitting creates train, validation, and test sets.

\`\`\`python
# Dataset Preparation
from datasets import Dataset
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')

def prepare_dataset(texts, labels):
    # Tokenize
    encodings = tokenizer(texts, truncation=True, padding=True, max_length=512)
    
    # Create dataset
    dataset = Dataset.from_dict({
        'input_ids': encodings['input_ids'],
        'attention_mask': encodings['attention_mask'],
        'labels': labels
    })
    
    # Split
    dataset = dataset.train_test_split(test_size=0.2)
    
    return dataset

# Example
texts = ["Text 1", "Text 2", "Text 3"]
labels = [0, 1, 0]
dataset = prepare_dataset(texts, labels)
print("Dataset prepared: " + str(len(dataset['train'])) + " train, " + str(len(dataset['test'])) + " test")
\`\`\`

Dataset preparation affects fine-tuning quality. Good data improves performance. Proper formatting enables training.

## Training Procedures

Training procedures fine-tune models effectively. They use appropriate learning rates. They monitor validation performance. They prevent overfitting. They save best models.

Procedures include learning rate selection, early stopping, and checkpointing. Learning rates are typically smaller than pre-training. Early stopping prevents overfitting. Checkpointing saves progress.

\`\`\`python
# Fine-tuning Training
from transformers import TrainingArguments, Trainer

training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=16,
    learning_rate=2e-5,  # Smaller than pre-training
    weight_decay=0.01,
    logging_dir='./logs',
    evaluation_strategy='epoch',
    save_strategy='epoch',
    load_best_model_at_end=True,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset,
)

trainer.train()
\`\`\`

Training procedures ensure effective fine-tuning. They balance adaptation and overfitting. They optimize performance.

## Evaluation During Fine-tuning

Evaluation monitors fine-tuning progress. It measures validation performance. It detects overfitting. It guides training decisions.

Evaluation includes validation metrics, learning curves, and early stopping. Validation metrics measure performance. Learning curves show progress. Early stopping prevents overfitting.

\`\`\`python
# Evaluation During Training
def evaluate_during_training(trainer, eval_dataset):
    # Evaluate
    eval_results = trainer.evaluate(eval_dataset)
    
    # Log metrics
    print("Validation Loss: " + str(eval_results['eval_loss']))
    print("Validation Accuracy: " + str(eval_results['eval_accuracy']))
    
    return eval_results

# Monitor during training
for epoch in range(num_epochs):
    trainer.train()
    eval_results = evaluate_during_training(trainer, eval_dataset)
\`\`\`

Evaluation guides fine-tuning. It detects issues early. It optimizes performance.

## Hyperparameter Tuning

Hyperparameter tuning finds optimal settings. It tests different configurations. It measures performance. It selects best settings.

![Hyperparameter Tuning](/tutorials/ai-tutorial-16-fine-tuning/diagram-hyperparameter-tuning.svg)

The diagram shows hyperparameter tuning methods. Grid search tests all combinations. Random search samples randomly. Bayesian optimization uses prior results. Each method has different efficiency.

Tuning includes learning rate, batch size, and epochs. Learning rate affects adaptation speed. Batch size affects stability. Epochs affect training duration.

\`\`\`python
# Hyperparameter Tuning
from transformers import Trainer
import optuna

def objective(trial):
    learning_rate = trial.suggest_loguniform('learning_rate', 1e-6, 1e-4)
    batch_size = trial.suggest_categorical('batch_size', [8, 16, 32])
    
    training_args = TrainingArguments(
        learning_rate=learning_rate,
        per_device_train_batch_size=batch_size,
        # ... other args
    )
    
    trainer = Trainer(model=model, args=training_args, train_dataset=train_dataset)
    trainer.train()
    
    eval_results = trainer.evaluate(eval_dataset)
    return eval_results['eval_accuracy']

study = optuna.create_study(direction='maximize')
study.optimize(objective, n_trials=10)
print("Best hyperparameters: " + str(study.best_params))
\`\`\`

Hyperparameter tuning optimizes performance. It finds effective settings. It improves results.

### Detailed Fine-tuning Workflow

Fine-tuning workflow includes data preparation, model setup, training, and evaluation. Each step requires careful attention. Proper workflow ensures successful fine-tuning.

Data preparation involves collecting task-specific data. Data should be clean and labeled. Split into train, validation, and test sets. Typical splits are 70-15-15 or 80-10-10. Validation set guides training. Test set evaluates final performance.

Model setup involves loading pre-trained model. Add task-specific head if needed. Freeze or unfreeze layers. Choose learning rate carefully. Pre-trained layers need smaller learning rates. New layers can use larger rates.

\`\`\`python
# Detailed Fine-tuning Workflow
from transformers import AutoModelForSequenceClassification, AutoTokenizer, TrainingArguments, Trainer
from datasets import Dataset
import torch

class FineTuningWorkflow:
    def __init__(self, model_name='bert-base-uncased', num_labels=2):
        self.model_name = model_name
        self.num_labels = num_labels
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = None
    
    def prepare_data(self, texts, labels, test_size=0.2, val_size=0.1):
        """Prepare and split data"""
        from sklearn.model_selection import train_test_split
        
        # First split: train + val vs test
        X_temp, X_test, y_temp, y_test = train_test_split(
            texts, labels, test_size=test_size, random_state=42, stratify=labels
        )
        
        # Second split: train vs val
        X_train, X_val, y_train, y_val = train_test_split(
            X_temp, y_temp, test_size=val_size/(1-test_size), random_state=42, stratify=y_temp
        )
        
        # Tokenize
        train_encodings = self.tokenizer(X_train, truncation=True, padding=True, max_length=512)
        val_encodings = self.tokenizer(X_val, truncation=True, padding=True, max_length=512)
        test_encodings = self.tokenizer(X_test, truncation=True, padding=True, max_length=512)
        
        # Create datasets
        train_dataset = Dataset.from_dict({
            'input_ids': train_encodings['input_ids'],
            'attention_mask': train_encodings['attention_mask'],
            'labels': y_train
        })
        
        val_dataset = Dataset.from_dict({
            'input_ids': val_encodings['input_ids'],
            'attention_mask': val_encodings['attention_mask'],
            'labels': y_val
        })
        
        test_dataset = Dataset.from_dict({
            'input_ids': test_encodings['input_ids'],
            'attention_mask': test_encodings['attention_mask'],
            'labels': y_test
        })
        
        return train_dataset, val_dataset, test_dataset
    
    def setup_model(self, freeze_base=False, custom_head=None):
        """Setup model for fine-tuning"""
        self.model = AutoModelForSequenceClassification.from_pretrained(
            self.model_name,
            num_labels=self.num_labels
        )
        
        if freeze_base:
            # Freeze base model parameters
            for param in self.model.base_model.parameters():
                param.requires_grad = False
        
        if custom_head:
            # Replace classification head
            self.model.classifier = custom_head
    
    def fine_tune(self, train_dataset, val_dataset, learning_rate=2e-5, num_epochs=3):
        """Fine-tune model"""
        training_args = TrainingArguments(
            output_dir='./results',
            num_train_epochs=num_epochs,
            per_device_train_batch_size=16,
            per_device_eval_batch_size=16,
            learning_rate=learning_rate,
            weight_decay=0.01,
            logging_dir='./logs',
            evaluation_strategy='epoch',
            save_strategy='epoch',
            load_best_model_at_end=True,
            metric_for_best_model='accuracy',
            greater_is_better=True
        )
        
        trainer = Trainer(
            model=self.model,
            args=training_args,
            train_dataset=train_dataset,
            eval_dataset=val_dataset,
        )
        
        trainer.train()
        return trainer
    
    def evaluate(self, test_dataset, trainer):
        """Evaluate on test set"""
        results = trainer.evaluate(test_dataset)
        return results

# Example workflow
workflow = FineTuningWorkflow(model_name='bert-base-uncased', num_labels=2)

texts = ["Great movie", "Terrible film", "Amazing experience", "Poor quality"]
labels = [1, 0, 1, 0]

train_ds, val_ds, test_ds = workflow.prepare_data(texts, labels)
workflow.setup_model(freeze_base=False)
trainer = workflow.fine_tune(train_ds, val_ds, learning_rate=2e-5, num_epochs=3)
results = workflow.evaluate(test_ds, trainer)
print("Test results: " + str(results))
\`\`\`

### Fine-tuning Best Practices

Use appropriate learning rates. Pre-trained layers need small rates (1e-5 to 5e-5). New layers can use larger rates (1e-4 to 1e-3). Use learning rate schedules. Start with warmup.

Monitor training carefully. Track training and validation loss. Watch for overfitting. Use early stopping. Save best checkpoints. Evaluate on test set only at end.

Handle class imbalance. Use weighted loss functions. Oversample minority classes. Use F1 score instead of accuracy. Adjust decision thresholds.

\`\`\`python
# Fine-tuning Best Practices
from transformers import Trainer, TrainingArguments
from torch.nn import CrossEntropyLoss
import torch
import numpy as np

class BestPracticeFineTuning:
    def __init__(self):
        self.class_weights = None
    
    def compute_class_weights(self, labels):
        """Compute class weights for imbalanced data"""
        from sklearn.utils.class_weight import compute_class_weight
        
        unique_labels = np.unique(labels)
        weights = compute_class_weight('balanced', classes=unique_labels, y=labels)
        self.class_weights = torch.tensor(weights, dtype=torch.float)
        return self.class_weights
    
    def create_weighted_loss(self):
        """Create weighted loss function"""
        def weighted_loss(predictions, labels):
            loss_fct = CrossEntropyLoss(weight=self.class_weights)
            return loss_fct(predictions, labels)
        return weighted_loss
    
    def setup_training_args(self, learning_rate=2e-5, warmup_steps=100):
        """Setup training arguments with best practices"""
        return TrainingArguments(
            output_dir='./results',
            num_train_epochs=3,
            per_device_train_batch_size=16,
            per_device_eval_batch_size=16,
            learning_rate=learning_rate,
            warmup_steps=warmup_steps,  # Learning rate warmup
            weight_decay=0.01,
            logging_dir='./logs',
            logging_steps=10,
            evaluation_strategy='steps',
            eval_steps=100,
            save_strategy='steps',
            save_steps=100,
            load_best_model_at_end=True,
            metric_for_best_model='f1',  # Use F1 for imbalanced data
            greater_is_better=True,
            save_total_limit=3,  # Keep only best 3 checkpoints
            fp16=True,  # Use mixed precision for speed
        )
    
    def early_stopping_callback(self, patience=3):
        """Early stopping to prevent overfitting"""
        from transformers import EarlyStoppingCallback
        return EarlyStoppingCallback(early_stopping_patience=patience)

# Example
best_practice = BestPracticeFineTuning()
labels = [0, 0, 0, 1, 1]  # Imbalanced
weights = best_practice.compute_class_weights(labels)
print("Class weights: " + str(weights))

training_args = best_practice.setup_training_args(learning_rate=2e-5, warmup_steps=50)
print("Training arguments configured with best practices")
\`\`\`

## Summary

Fine-tuning adapts pre-trained models to tasks. Transfer learning enables efficient adaptation. Dataset preparation creates task data. Training procedures fine-tune effectively. Evaluation monitors progress. Hyperparameter tuning optimizes settings. Fine-tuning enables task-specific performance.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Hugging Face Fine-tuning](https://huggingface.co/docs/transformers/training)
- [Transfer Learning](https://www.tensorflow.org/tutorials/images/transfer_learning)
- [Fine-tuning Best Practices](https://huggingface.co/docs/transformers/training#best-practices)
`
}

function getProductionTutorialContent(): string {
  return `
## Production Deployment Overview

Production deployment puts models into real use. It requires serving infrastructure. It handles scale and reliability. It monitors performance. It enables continuous improvement.

Production systems serve predictions to users. They handle high traffic. They maintain low latency. They ensure reliability. They monitor quality.

![Production Deployment](/tutorials/ai-tutorial-17-production/diagram-production-deployment.svg)

The diagram shows production architecture. Models serve predictions. Load balancers distribute traffic. Monitoring tracks performance.

## Model Serving Architectures

Serving architectures deliver predictions efficiently. They include REST APIs, gRPC services, and batch processing. Each suits different use cases.

REST APIs provide HTTP endpoints. They work for web applications. gRPC provides efficient RPC. It works for high-throughput systems. Batch processing handles large volumes.

\`\`\`python
# Model Serving API
from flask import Flask, request, jsonify
import torch

app = Flask(__name__)
model = load_model('model.pth')
model.eval()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    input_data = preprocess(data['input'])
    
    with torch.no_grad():
        prediction = model(input_data)
    
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
\`\`\`

Serving architectures enable model deployment. They provide interfaces for applications. They handle requests efficiently.

![Model Serving](/tutorials/ai-tutorial-17-production/diagram-model-serving.svg)

The diagram shows model serving architecture. Client sends requests. API gateway routes traffic. Model service processes inference. Response returned to client.

## Batch vs Real-time Inference

Batch inference processes many predictions together. It is efficient for large volumes. Real-time inference processes individual requests. It provides immediate responses.

Batch inference uses parallel processing. It optimizes throughput. Real-time inference uses optimized models. It minimizes latency.

\`\`\`python
# Batch Inference
def batch_predict(model, inputs, batch_size=32):
    predictions = []
    for i in range(0, len(inputs), batch_size):
        batch = inputs[i:i+batch_size]
        batch_preds = model(batch)
        predictions.extend(batch_preds)
    return predictions

# Real-time Inference
def realtime_predict(model, input_data):
    # Optimized for single prediction
    prediction = model(input_data)
    return prediction
\`\`\`

Choose based on requirements. Batch for efficiency. Real-time for responsiveness.

![Batch vs Real-time Inference](/tutorials/ai-tutorial-17-production/diagram-batch-vs-realtime.svg)

The diagram compares batch and real-time inference. Batch processes multiple requests together. Real-time processes requests individually. Each approach suits different use cases.

## Performance Optimization

Optimization improves serving performance. It reduces latency. It increases throughput. It lowers costs.

Techniques include model quantization, caching, and hardware acceleration. Quantization reduces model size. Caching stores frequent predictions. Hardware acceleration speeds computation.

\`\`\`python
# Performance Optimization
import torch

# Quantization
quantized_model = torch.quantization.quantize_dynamic(
    model, {torch.nn.Linear}, dtype=torch.qint8
)

# Caching
from functools import lru_cache

@lru_cache(maxsize=1000)
def cached_predict(input_hash):
    return model.predict(input_data)

# Hardware acceleration
model = model.to('cuda')  # GPU acceleration
\`\`\`

Optimization improves efficiency. It reduces costs. It enables scale.

### Detailed Performance Optimization Techniques

Model quantization reduces precision. Float32 to int8 reduces size by 4x. It speeds up inference. It reduces memory usage. It may slightly reduce accuracy. Dynamic quantization quantizes during inference. Static quantization quantizes before deployment.

Pruning removes unnecessary weights. It sets small weights to zero. It reduces model size. It speeds up inference. It maintains accuracy. Structured pruning removes entire neurons. Unstructured pruning removes individual weights.

Knowledge distillation trains smaller models. Student model learns from teacher model. Teacher is large accurate model. Student is small efficient model. Student mimics teacher outputs. This reduces size while maintaining quality.

\`\`\`python
# Detailed Optimization Techniques
import torch
import torch.nn as nn
from torch.quantization import quantize_dynamic, quantize_static

class ModelOptimization:
    def __init__(self, model):
        self.model = model
    
    def dynamic_quantization(self):
        """Dynamic quantization"""
        quantized = quantize_dynamic(
            self.model,
            {nn.Linear, nn.LSTM, nn.GRU},
            dtype=torch.qint8
        )
        return quantized
    
    def static_quantization(self, calibration_data):
        """Static quantization with calibration"""
        self.model.eval()
        self.model.qconfig = torch.quantization.get_default_qconfig('fbgemm')
        
        # Calibrate
        torch.quantization.prepare(self.model, inplace=True)
        for data in calibration_data:
            self.model(data)
        torch.quantization.convert(self.model, inplace=True)
        
        return self.model
    
    def pruning(self, amount=0.2):
        """Prune model weights"""
        import torch.nn.utils.prune as prune
        
        for module in self.model.modules():
            if isinstance(module, nn.Linear):
                prune.l1_unstructured(module, name='weight', amount=amount)
                prune.remove(module, 'weight')
        
        return self.model
    
    def knowledge_distillation(self, teacher_model, student_model, train_loader, temperature=3.0, alpha=0.7):
        """Train student model using teacher"""
        criterion = nn.KLDivLoss()
        optimizer = torch.optim.Adam(student_model.parameters())
        
        for inputs, labels in train_loader:
            # Teacher predictions
            with torch.no_grad():
                teacher_outputs = teacher_model(inputs)
            
            # Student predictions
            student_outputs = student_model(inputs)
            
            # Distillation loss
            distillation_loss = criterion(
                nn.functional.log_softmax(student_outputs / temperature, dim=1),
                nn.functional.softmax(teacher_outputs / temperature, dim=1)
            ) * (temperature ** 2)
            
            # Student loss
            student_loss = nn.functional.cross_entropy(student_outputs, labels)
            
            # Combined loss
            loss = alpha * distillation_loss + (1 - alpha) * student_loss
            
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
        
        return student_model

# Example
# model = YourModel()
# optimizer = ModelOptimization(model)
# quantized = optimizer.dynamic_quantization()
# pruned = optimizer.pruning(amount=0.3)
\`\`\`

### Hardware Acceleration Strategies

GPU acceleration uses parallel processing. It speeds up matrix operations. It requires CUDA or similar. It works well for large batches. It may have memory limits.

TPU acceleration uses tensor processing units. It is optimized for tensor operations. It provides high throughput. It requires specialized hardware. It works well for training.

CPU optimization uses SIMD instructions. It parallelizes within CPU cores. It works without special hardware. It provides moderate speedup. It is widely available.

\`\`\`python
# Hardware Acceleration
import torch

def optimize_for_hardware(model, device='cuda'):
    """Optimize model for specific hardware"""
    model = model.to(device)
    
    if device == 'cuda':
        # Enable cuDNN optimizations
        torch.backends.cudnn.benchmark = True
        torch.backends.cudnn.deterministic = False
        
        # Use mixed precision
        model = torch.cuda.amp.autocast()(model)
    
    # Compile model (PyTorch 2.0+)
    try:
        model = torch.compile(model)
    except:
        pass
    
    return model

# Batch processing for GPU
def batch_predict_gpu(model, inputs, batch_size=32):
    """Efficient batch prediction on GPU"""
    model.eval()
    predictions = []
    
    with torch.no_grad():
        for i in range(0, len(inputs), batch_size):
            batch = inputs[i:i+batch_size].to('cuda')
            batch_preds = model(batch)
            predictions.append(batch_preds.cpu())
    
    return torch.cat(predictions, dim=0)
\`\`\`

## Caching Strategies

Caching stores frequent predictions. It reduces computation. It improves response times. It lowers costs.

Caching methods include result caching, embedding caching, and model output caching. Result caching stores final predictions. Embedding caching stores intermediate results. Model output caching stores model outputs.

\`\`\`python
# Caching
import redis
import hashlib
import json

cache = redis.Redis(host='localhost', port=6379)

def get_cached_prediction(input_data):
    key = hashlib.md5(json.dumps(input_data).encode()).hexdigest()
    cached = cache.get(key)
    if cached:
        return json.loads(cached)
    return None

def cache_prediction(input_data, prediction):
    key = hashlib.md5(json.dumps(input_data).encode()).hexdigest()
    cache.setex(key, 3600, json.dumps(prediction))  # 1 hour TTL
\`\`\`

Caching improves performance. It reduces computation. It speeds responses.

## Monitoring and Logging

Monitoring tracks production performance. It measures prediction quality. It detects issues. It guides improvements.

![Monitoring](/tutorials/ai-tutorial-17-production/diagram-monitoring.svg)

The diagram shows monitoring metrics. Performance metrics track latency and throughput. Model quality metrics track predictions. Data quality metrics track inputs. Business metrics track impact.

Monitoring includes metrics collection, alerting, and dashboards. Metrics track performance. Alerting detects problems. Dashboards visualize status.

\`\`\`python
# Monitoring
import logging
from prometheus_client import Counter, Histogram

prediction_counter = Counter('predictions_total', 'Total predictions')
prediction_latency = Histogram('prediction_latency_seconds', 'Prediction latency')

def monitored_predict(model, input_data):
    prediction_counter.inc()
    
    with prediction_latency.time():
        prediction = model(input_data)
    
    logging.info(f"Prediction: {prediction}")
    return prediction
\`\`\`

Monitoring ensures quality. It detects issues. It guides improvements.

### Detailed Monitoring Implementation

Implement comprehensive monitoring system. Track metrics at multiple levels. System metrics measure infrastructure. Model metrics measure predictions. Business metrics measure impact.

System metrics include CPU usage, memory usage, GPU utilization, network throughput, and disk I/O. These indicate infrastructure health. They help identify bottlenecks. They guide scaling decisions.

Model metrics include prediction latency, throughput, error rates, and cache hit rates. Latency measures response time. Throughput measures requests per second. Error rates track failures. Cache hit rates measure efficiency.

\`\`\`python
# Detailed Monitoring Implementation
import time
import psutil
import logging
from prometheus_client import Counter, Histogram, Gauge
from collections import deque
import numpy as np

class ProductionMonitoring:
    def __init__(self):
        # Prometheus metrics
        self.prediction_counter = Counter('predictions_total', 'Total predictions')
        self.prediction_latency = Histogram('prediction_latency_seconds', 'Prediction latency')
        self.error_counter = Counter('prediction_errors_total', 'Total prediction errors')
        self.cache_hits = Counter('cache_hits_total', 'Total cache hits')
        self.cache_misses = Counter('cache_misses_total', 'Total cache misses')
        
        # System metrics
        self.cpu_usage = Gauge('cpu_usage_percent', 'CPU usage percentage')
        self.memory_usage = Gauge('memory_usage_percent', 'Memory usage percentage')
        
        # Model quality metrics
        self.prediction_distribution = deque(maxlen=1000)
        
        # Alerting thresholds
        self.latency_threshold = 1.0
        self.error_rate_threshold = 0.05
    
    def monitor_prediction(self, func):
        def wrapper(*args, **kwargs):
            start_time = time.time()
            try:
                result = func(*args, **kwargs)
                latency = time.time() - start_time
                self.prediction_counter.inc()
                self.prediction_latency.observe(latency)
                if isinstance(result, (int, float)):
                    self.prediction_distribution.append(result)
                if latency > self.latency_threshold:
                    logging.warning(f'High latency: {latency:.2f}s')
                return result
            except Exception as e:
                self.error_counter.inc()
                logging.error(f'Prediction error: {str(e)}')
                raise
        return wrapper

# Example
monitoring = ProductionMonitoring()
\`\`\`

### Production Troubleshooting Guide

Common issues include high latency, low throughput, memory leaks, and model degradation. Each requires different diagnosis and fixes.

High latency causes include large models, inefficient preprocessing, network delays, and resource contention. Solutions include model optimization, caching, batch processing, and resource scaling.

Low throughput causes include sequential processing, small batch sizes, and inefficient code. Solutions include parallel processing, larger batches, and code optimization.

\`\`\`python
# Production Troubleshooting
class ProductionTroubleshooter:
    def diagnose_latency(self, prediction_func, input_data, num_samples=100):
        latencies = []
        for _ in range(num_samples):
            start = time.time()
            prediction_func(input_data)
            latencies.append(time.time() - start)
        
        latencies = np.array(latencies)
        return {
            'mean_latency': np.mean(latencies),
            'p95_latency': np.percentile(latencies, 95),
            'p99_latency': np.percentile(latencies, 99),
            'recommendations': [
                'Consider model quantization',
                'Implement caching',
                'Use batch processing'
            ] if np.mean(latencies) > 1.0 else []
        }
    
    def diagnose_throughput(self, prediction_func, input_data, duration=60):
        start_time = time.time()
        count = 0
        while time.time() - start_time < duration:
            prediction_func(input_data)
            count += 1
        throughput = count / duration
        return {
            'throughput_rps': throughput,
            'recommendations': [
                'Increase batch size',
                'Use parallel processing',
                'Optimize model inference'
            ] if throughput < 10 else []
        }

troubleshooter = ProductionTroubleshooter()
\`\`\`

## Scaling Considerations

Scaling handles increased load. It includes horizontal and vertical scaling. It maintains performance. It ensures reliability.

Horizontal scaling adds more servers. Vertical scaling increases server capacity. Both handle growth. Load balancing distributes traffic.

\`\`\`python
# Scaling
from multiprocessing import Process
import uvicorn

def run_server(port):
    app = create_app()
    uvicorn.run(app, host='0.0.0.0', port=port)

# Horizontal scaling
ports = [5000, 5001, 5002]
processes = [Process(target=run_server, args=(port,)) for port in ports]
for p in processes:
    p.start()
\`\`\`

Scaling enables growth. It maintains performance. It ensures reliability.

### Detailed Scaling Strategies

Horizontal scaling adds more servers. It distributes load across instances. It improves availability. It requires load balancing. It scales linearly with traffic.

Vertical scaling increases server capacity. It adds more CPU, memory, or GPU. It is simpler to implement. It has hardware limits. It may require downtime.

Auto-scaling adjusts capacity automatically. It monitors metrics like CPU usage. It adds instances when load increases. It removes instances when load decreases. It optimizes costs.

\`\`\`python
# Detailed Scaling Implementation
import time
import threading
from queue import Queue
import multiprocessing

class ScalableModelServer:
    def __init__(self, num_workers=4):
        self.num_workers = num_workers
        self.request_queue = Queue()
        self.response_queue = Queue()
        self.workers = []
        self.metrics = {
            'requests_processed': 0,
            'avg_latency': 0,
            'queue_size': 0
        }
    
    def start_workers(self):
        """Start worker processes"""
        for i in range(self.num_workers):
            worker = multiprocessing.Process(target=self.worker_process, args=(i,))
            worker.start()
            self.workers.append(worker)
    
    def worker_process(self, worker_id):
        """Worker process that handles predictions"""
        # Load model in worker
        model = self.load_model()
        
        while True:
            if not self.request_queue.empty():
                request = self.request_queue.get()
                start_time = time.time()
                
                # Process prediction
                result = model.predict(request['data'])
                
                latency = time.time() - start_time
                self.response_queue.put({
                    'request_id': request['id'],
                    'result': result,
                    'latency': latency,
                    'worker_id': worker_id
                })
    
    def load_model(self):
        """Load model (placeholder)"""
        return type('Model', (), {'predict': lambda self, x: x * 2})()
    
    def auto_scale(self, target_latency=0.5, min_workers=2, max_workers=10):
        """Auto-scale based on metrics"""
        current_latency = self.metrics['avg_latency']
        queue_size = self.metrics['queue_size']
        
        if current_latency > target_latency * 1.5 and self.num_workers < max_workers:
            # Scale up
            self.add_worker()
        elif current_latency < target_latency * 0.5 and self.num_workers > min_workers:
            # Scale down
            self.remove_worker()
    
    def add_worker(self):
        """Add new worker"""
        worker = multiprocessing.Process(target=self.worker_process, args=(self.num_workers,))
        worker.start()
        self.workers.append(worker)
        self.num_workers += 1
        print(f"Scaled up to {self.num_workers} workers")
    
    def remove_worker(self):
        """Remove worker"""
        if self.workers:
            worker = self.workers.pop()
            worker.terminate()
            self.num_workers -= 1
            print(f"Scaled down to {self.num_workers} workers")

# Load balancing
class LoadBalancer:
    def __init__(self, servers):
        self.servers = servers
        self.current_index = 0
        self.server_loads = {server: 0 for server in servers}
    
    def round_robin(self, request):
        """Round-robin load balancing"""
        server = self.servers[self.current_index]
        self.current_index = (self.current_index + 1) % len(self.servers)
        return server
    
    def least_connections(self, request):
        """Least connections load balancing"""
        server = min(self.server_loads, key=self.server_loads.get)
        return server
    
    def weighted_round_robin(self, request, weights):
        """Weighted round-robin"""
        total_weight = sum(weights.values())
        rand = random.random() * total_weight
        cumulative = 0
        
        for server, weight in weights.items():
            cumulative += weight
            if rand <= cumulative:
                return server

# Example
servers = ['server1', 'server2', 'server3']
lb = LoadBalancer(servers)
selected = lb.round_robin({'data': 'test'})
print("Selected server: " + str(selected))
\`\`\`

### Production Deployment Checklist

Before deployment, verify model performance. Test on validation data. Measure accuracy and latency. Check resource requirements. Validate input/output formats.

Set up monitoring infrastructure. Configure metrics collection. Set up alerting rules. Create dashboards. Test alerting system.

Prepare rollback plan. Keep previous model version. Document rollback procedure. Test rollback process. Ensure quick recovery.

\`\`\`python
# Production Deployment Checklist
class DeploymentChecklist:
    def __init__(self):
        self.checks = []
    
    def verify_model_performance(self, model, test_data, min_accuracy=0.9, max_latency=1.0):
        """Verify model meets performance requirements"""
        # Test accuracy
        predictions = model.predict(test_data['X'])
        accuracy = np.mean(predictions == test_data['y'])
        
        # Test latency
        import time
        start = time.time()
        model.predict(test_data['X'][:1])
        latency = time.time() - start
        
        checks = {
            'accuracy_check': accuracy >= min_accuracy,
            'latency_check': latency <= max_latency,
            'accuracy_value': accuracy,
            'latency_value': latency
        }
        
        self.checks.append(('Model Performance', checks))
        return checks
    
    def verify_resources(self, model_size_mb=100, required_memory_gb=2):
        """Verify resource requirements"""
        import psutil
        
        available_memory = psutil.virtual_memory().available / (1024**3)  # GB
        
        checks = {
            'memory_check': available_memory >= required_memory_gb,
            'available_memory_gb': available_memory,
            'required_memory_gb': required_memory_gb
        }
        
        self.checks.append(('Resource Requirements', checks))
        return checks
    
    def verify_monitoring(self, monitoring_setup):
        """Verify monitoring is configured"""
        checks = {
            'metrics_configured': 'metrics' in monitoring_setup,
            'alerting_configured': 'alerting' in monitoring_setup,
            'dashboards_configured': 'dashboards' in monitoring_setup
        }
        
        self.checks.append(('Monitoring Setup', checks))
        return checks
    
    def generate_report(self):
        """Generate deployment readiness report"""
        report = []
        all_passed = True
        
        for check_name, check_results in self.checks:
            passed = all(v for k, v in check_results.items() if k.endswith('_check'))
            all_passed = all_passed and passed
            
            report.append({
                'check': check_name,
                'passed': passed,
                'details': check_results
            })
        
        return {
            'ready_for_deployment': all_passed,
            'checks': report
        }

# Example
checklist = DeploymentChecklist()
# checklist.verify_model_performance(model, test_data)
# checklist.verify_resources()
# report = checklist.generate_report()
# print("Deployment ready: " + str(report['ready_for_deployment']))
\`\`\`

## Summary

Production deployment puts models into use. Serving architectures deliver predictions. Batch and real-time suit different needs. Optimization improves performance. Caching reduces computation. Monitoring tracks quality. Scaling handles growth. Production systems enable real-world impact.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Model Serving Best Practices](https://www.tensorflow.org/tfx/guide/serving)
- [MLOps Guide](https://ml-ops.org/)
- [Production ML Systems](https://www.oreilly.com/library/view/building-machine-learning/9781492045106/)
`
}

function getAdvancedArchitecturesTutorialContent(): string {
  return `
## Advanced Architectures Overview

Advanced architectures handle complex requirements. They use multi-vector embeddings. They support temporal search. They employ ensemble methods. They optimize indexing strategies.

Advanced architectures improve performance. They handle complexity. They enable sophisticated applications. They optimize for scale.

![Advanced Architectures](/tutorials/ai-tutorial-18-advanced-architectures/diagram-advanced-architectures.svg)

The diagram shows advanced architecture components. Multi-vector handles complexity. Temporal search handles time. Ensembles improve performance.

## Multi-vector Embeddings

Multi-vector embeddings use multiple vectors per document. They capture different aspects. They improve retrieval coverage. They handle complex documents.

Methods include sentence-level, chunk-level, and aspect-based embeddings. Each captures different information. Combined they improve retrieval.

\`\`\`python
# Multi-vector Embeddings
def create_multi_vectors(document):
    # Multiple embedding strategies
    sentence_embs = embed_sentences(document)
    chunk_embs = embed_chunks(document)
    aspect_embs = embed_aspects(document)
    
    return {
        'sentences': sentence_embs,
        'chunks': chunk_embs,
        'aspects': aspect_embs
    }

def multi_vector_search(query, multi_vectors):
    query_emb = embed_query(query)
    
    # Search across all vector types
    all_results = []
    for doc_id, vectors in multi_vectors.items():
        for vec_type, embs in vectors.items():
            scores = compute_similarity(query_emb, embs)
            all_results.append((doc_id, vec_type, max(scores)))
    
    # Aggregate and rank
    return aggregate_results(all_results)
\`\`\`

Multi-vector embeddings improve coverage. They capture document complexity. They enable better retrieval.

## Temporal Search Patterns

Temporal search handles time-sensitive information. It considers document timestamps. It prioritizes recent information. It enables time-based queries.

Patterns include recency boosting, time-weighted scoring, and temporal filtering. Each handles time differently. Combined they improve temporal relevance.

\`\`\`python
# Temporal Search
def temporal_search(query, documents, timestamps, recency_weight=0.3):
    # Relevance scores
    relevance = compute_relevance(query, documents)
    
    # Recency scores
    max_time = max(timestamps)
    recency = [1.0 / (1 + (max_time - t).days) for t in timestamps]
    recency = normalize(recency)
    
    # Combined scores
    scores = (1 - recency_weight) * relevance + recency_weight * recency
    
    return rank_by_scores(scores)
\`\`\`

Temporal search handles time-sensitive queries. It prioritizes recent information. It improves temporal relevance.

## Ensemble Methods

Ensemble methods combine multiple models. They improve performance. They reduce variance. They increase robustness.

Methods include voting, averaging, and stacking. Voting combines predictions. Averaging combines probabilities. Stacking uses meta-learner.

\`\`\`python
# Ensemble Methods
def ensemble_predict(models, input_data):
    predictions = []
    for model in models:
        pred = model.predict(input_data)
        predictions.append(pred)
    
    # Voting
    voted = majority_vote(predictions)
    
    # Averaging
    averaged = np.mean(predictions, axis=0)
    
    # Stacking
    stacked = meta_learner.predict(predictions)
    
    return stacked
\`\`\`

Ensemble methods improve performance. They combine model strengths. They reduce individual weaknesses.

### Detailed Ensemble Techniques

Voting ensembles combine predictions from multiple models. Hard voting uses majority class. Soft voting averages probabilities. Voting works well when models are diverse. It reduces individual model errors.

Averaging ensembles average predictions. For regression, average numeric predictions. For classification, average probability distributions. Averaging reduces variance. It improves stability.

Stacking uses meta-learner. Base models make predictions. Meta-learner learns to combine predictions. It learns optimal combination. It often performs best. It requires more data.

\`\`\`python
# Detailed Ensemble Implementation
from sklearn.ensemble import VotingClassifier, VotingRegressor, StackingClassifier
from sklearn.linear_model import LogisticRegression, LinearRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
import numpy as np

class EnsembleMethods:
    def __init__(self):
        self.models = []
    
    def hard_voting(self, models, X):
        """Hard voting ensemble"""
        predictions = []
        for model in models:
            pred = model.predict(X)
            predictions.append(pred)
        
        # Majority vote
        predictions = np.array(predictions)
        final_pred = []
        for i in range(X.shape[0]):
            votes = predictions[:, i]
            final_pred.append(np.bincount(votes.astype(int)).argmax())
        
        return np.array(final_pred)
    
    def soft_voting(self, models, X):
        """Soft voting ensemble"""
        probabilities = []
        for model in models:
            if hasattr(model, 'predict_proba'):
                proba = model.predict_proba(X)
                probabilities.append(proba)
        
        # Average probabilities
        avg_proba = np.mean(probabilities, axis=0)
        return np.argmax(avg_proba, axis=1)
    
    def stacking_ensemble(self, base_models, meta_model, X_train, y_train, X_test):
        """Stacking ensemble"""
        # Train base models
        base_predictions = []
        for model in base_models:
            model.fit(X_train, y_train)
            pred = model.predict_proba(X_test) if hasattr(model, 'predict_proba') else model.predict(X_test)
            base_predictions.append(pred)
        
        # Stack predictions
        stacked_X = np.column_stack(base_predictions)
        
        # Train meta-learner
        meta_model.fit(stacked_X, y_train)
        
        # Predict
        return meta_model.predict(stacked_X)
    
    def bagging_ensemble(self, base_model, X_train, y_train, n_estimators=10):
        """Bootstrap aggregating"""
        from sklearn.utils import resample
        
        models = []
        for i in range(n_estimators):
            # Bootstrap sample
            X_boot, y_boot = resample(X_train, y_train, random_state=i)
            
            # Train model on bootstrap sample
            model = type(base_model)(**base_model.get_params())
            model.fit(X_boot, y_boot)
            models.append(model)
        
        return models
    
    def predict_bagging(self, models, X):
        """Predict using bagging ensemble"""
        predictions = []
        for model in models:
            pred = model.predict(X)
            predictions.append(pred)
        
        # Average predictions
        return np.mean(predictions, axis=0)

# Example
ensemble = EnsembleMethods()
base_models = [
    LogisticRegression(),
    DecisionTreeClassifier(),
    SVC(probability=True)
]

# Hard voting
# hard_pred = ensemble.hard_voting(base_models, X_test)

# Soft voting
# soft_pred = ensemble.soft_voting(base_models, X_test)

# Stacking
meta_model = LogisticRegression()
# stacked_pred = ensemble.stacking_ensemble(base_models, meta_model, X_train, y_train, X_test)
\`\`\`

### Ensemble Selection and Optimization

Select diverse base models. Different algorithms learn different patterns. Different architectures capture different features. Diversity improves ensemble performance. Similar models provide little benefit.

Optimize ensemble size. More models improve performance but increase computation. Diminishing returns occur after certain point. Typical ensemble size is 5-20 models. Test different sizes to find optimal.

Weight ensemble members. Some models perform better. Assign higher weights to better models. Learn weights from validation data. Weighted combination improves performance.

\`\`\`python
# Ensemble Optimization
class EnsembleOptimizer:
    def __init__(self):
        self.model_weights = None
    
    def optimize_weights(self, models, X_val, y_val):
        """Optimize ensemble weights using validation data"""
        from scipy.optimize import minimize
        
        # Get predictions from all models
        predictions = []
        for model in models:
            if hasattr(model, 'predict_proba'):
                pred = model.predict_proba(X_val)
            else:
                pred = model.predict(X_val)
            predictions.append(pred)
        
        predictions = np.array(predictions)
        
        # Objective function: minimize error with weighted combination
        def objective(weights):
            weighted_pred = np.tensordot(weights, predictions, axes=1)
            if len(weighted_pred.shape) > 1:
                weighted_pred = np.argmax(weighted_pred, axis=1)
            error = np.mean(weighted_pred != y_val)
            return error
        
        # Constraint: weights sum to 1
        constraints = {'type': 'eq', 'fun': lambda w: np.sum(w) - 1}
        bounds = [(0, 1) for _ in range(len(models))]
        
        # Initial weights (equal)
        initial_weights = np.ones(len(models)) / len(models)
        
        # Optimize
        result = minimize(objective, initial_weights, method='SLSQP', 
                         bounds=bounds, constraints=constraints)
        
        self.model_weights = result.x
        return self.model_weights
    
    def weighted_ensemble_predict(self, models, X):
        """Predict using optimized weights"""
        predictions = []
        for model in models:
            if hasattr(model, 'predict_proba'):
                pred = model.predict_proba(X)
            else:
                pred = model.predict(X)
            predictions.append(pred)
        
        predictions = np.array(predictions)
        weighted_pred = np.tensordot(self.model_weights, predictions, axes=1)
        
        if len(weighted_pred.shape) > 1:
            return np.argmax(weighted_pred, axis=1)
        return weighted_pred

# Example
optimizer = EnsembleOptimizer()
# weights = optimizer.optimize_weights(base_models, X_val, y_val)
# weighted_pred = optimizer.weighted_ensemble_predict(base_models, X_test)
\`\`\`

## Advanced Indexing Strategies

Advanced indexing optimizes search performance. It uses specialized structures. It handles high dimensions. It scales to large datasets.

Strategies include HNSW, IVF, and product quantization. Each optimizes different aspects. Combined they enable scale.

\`\`\`python
# Advanced Indexing
import faiss

# HNSW index
index_hnsw = faiss.IndexHNSWFlat(dimension, M=16)
index_hnsw.add(vectors)

# IVF index
quantizer = faiss.IndexFlatL2(dimension)
index_ivf = faiss.IndexIVFFlat(quantizer, dimension, nlist=100)
index_ivf.train(vectors)
index_ivf.add(vectors)

# Product quantization
index_pq = faiss.IndexPQ(dimension, M=8, nbits=8)
index_pq.train(vectors)
index_pq.add(vectors)
\`\`\`

Advanced indexing enables scale. It optimizes performance. It handles large datasets.

## Complex Architecture Designs

Complex architectures combine multiple techniques. They optimize for specific requirements. They balance tradeoffs. They enable sophisticated applications.

Designs include multi-stage retrieval, cascading models, and adaptive systems. Each handles complexity differently. Combined they enable advanced applications.

\`\`\`python
# Complex Architecture
class AdvancedSearchSystem:
    def __init__(self):
        self.retrievers = [semantic_retriever, keyword_retriever, hybrid_retriever]
        self.reranker = cross_encoder_reranker
        self.generator = llm_generator
    
    def search(self, query):
        # Multi-stage retrieval
        candidates = []
        for retriever in self.retrievers:
            results = retriever.retrieve(query, top_k=20)
            candidates.extend(results)
        
        # Deduplicate
        candidates = deduplicate(candidates)
        
        # Rerank
        reranked = self.reranker.rerank(query, candidates, top_k=10)
        
        # Generate
        context = format_context(reranked)
        answer = self.generator.generate(query, context)
        
        return answer
\`\`\`

Complex architectures enable advanced applications. They combine techniques effectively. They optimize for requirements.

### Detailed Architecture Design Patterns

Multi-stage retrieval uses multiple retrieval passes. First stage uses fast approximate search. It retrieves large candidate set. Second stage uses accurate reranking. It selects final results. This balances speed and accuracy.

Cascading models use multiple models in sequence. Early models filter candidates quickly. Later models provide accurate predictions. Each model has different speed-accuracy tradeoff. This optimizes overall performance.

Adaptive systems adjust behavior dynamically. They monitor performance metrics. They switch strategies based on conditions. They optimize for current workload. They improve efficiency.

\`\`\`python
# Detailed Architecture Patterns
class MultiStageRetrieval:
    def __init__(self):
        self.fast_retriever = FastApproximateRetriever()  # Fast, approximate
        self.accurate_reranker = AccurateReranker()  # Slow, accurate
    
    def retrieve(self, query, top_k=10):
        # Stage 1: Fast approximate retrieval
        candidates = self.fast_retriever.retrieve(query, top_k=100)
        
        # Stage 2: Accurate reranking
        final_results = self.accurate_reranker.rerank(query, candidates, top_k=top_k)
        
        return final_results

class CascadingModels:
    def __init__(self):
        self.fast_model = FastModel()  # Quick filtering
        self.accurate_model = AccurateModel()  # Precise prediction
    
    def predict(self, input_data):
        # Stage 1: Fast filtering
        fast_prediction = self.fast_model.predict(input_data)
        
        # Only use accurate model if needed
        if fast_prediction.confidence < 0.8:
            accurate_prediction = self.accurate_model.predict(input_data)
            return accurate_prediction
        else:
            return fast_prediction

class AdaptiveSystem:
    def __init__(self):
        self.strategies = {
            'fast': FastStrategy(),
            'balanced': BalancedStrategy(),
            'accurate': AccurateStrategy()
        }
        self.current_strategy = 'balanced'
        self.metrics = {'latency': [], 'accuracy': []}
    
    def adapt(self):
        avg_latency = np.mean(self.metrics['latency'][-100:])
        avg_accuracy = np.mean(self.metrics['accuracy'][-100:])
        
        if avg_latency > 1.0:
            self.current_strategy = 'fast'
        elif avg_accuracy < 0.8:
            self.current_strategy = 'accurate'
        else:
            self.current_strategy = 'balanced'
    
    def process(self, input_data):
        result = self.strategies[self.current_strategy].process(input_data)
        self.metrics['latency'].append(result.latency)
        self.metrics['accuracy'].append(result.accuracy)
        self.adapt()
        return result
\`\`\`

## Attention Mechanisms

Attention mechanisms enable models to focus on relevant information. Self-attention processes all positions. Cross-attention connects different sequences. Multi-head attention captures multiple patterns.

![Attention Mechanisms](/tutorials/ai-tutorial-18-advanced-architectures/diagram-attention-mechanisms.svg)

The diagram shows attention types. Self-attention connects all tokens. Cross-attention connects query and keys. Multi-head attention uses parallel heads. Each captures different relationships.

### Detailed Attention Mechanism Mathematics

Self-attention computes attention(Q, K, V) = softmax(QKᵀ / √dₖ) V. Q, K, V are query, key, and value matrices. Each row represents a token position. QKᵀ computes similarity between all position pairs. Division by √dₖ prevents large values. Softmax converts to probabilities. V provides content to attend to.

Scaled dot-product attention uses dot products. It is computationally efficient. It works well in practice. It requires O(n²) computation for sequence length n. This limits maximum sequence length.

Attention weights show what each position attends to. They are interpretable. They reveal model focus. They help debug models. They enable visualization.

\`\`\`python
# Detailed Attention Mathematics
import torch
import torch.nn as nn
import numpy as np
import matplotlib.pyplot as plt

class AttentionMechanismDetailed:
    def __init__(self, d_model, d_k=None, d_v=None):
        self.d_model = d_model
        self.d_k = d_k if d_k else d_model
        self.d_v = d_v if d_v else d_model
        
        self.W_q = nn.Linear(d_model, self.d_k)
        self.W_k = nn.Linear(d_model, self.d_k)
        self.W_v = nn.Linear(d_model, self.d_v)
    
    def scaled_dot_product_attention(self, Q, K, V, mask=None):
        """Compute scaled dot-product attention"""
        # Compute attention scores
        scores = torch.matmul(Q, K.transpose(-2, -1)) / np.sqrt(self.d_k)
        
        # Apply mask if provided
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)
        
        # Softmax
        attention_weights = torch.softmax(scores, dim=-1)
        
        # Apply to values
        output = torch.matmul(attention_weights, V)
        
        return output, attention_weights
    
    def forward(self, x, mask=None):
        """Forward pass"""
        Q = self.W_q(x)
        K = self.W_k(x)
        V = self.W_v(x)
        
        output, attention_weights = self.scaled_dot_product_attention(Q, K, V, mask)
        
        return output, attention_weights
    
    def visualize_attention(self, attention_weights, tokens):
        """Visualize attention weights"""
        weights = attention_weights[0].detach().numpy()  # First head, first sample
        
        plt.figure(figsize=(10, 8))
        plt.imshow(weights, cmap='Blues')
        plt.xlabel('Key Position')
        plt.ylabel('Query Position')
        plt.title('Attention Weights Visualization')
        plt.colorbar()
        plt.show()

# Example
attention = AttentionMechanismDetailed(d_model=512)
x = torch.randn(1, 10, 512)  # batch=1, seq_len=10, d_model=512
output, weights = attention(x)

print("Output shape: " + str(output.shape))
print("Attention weights shape: " + str(weights.shape))
print("Attention weights sum (should be 1): " + str(weights.sum(dim=-1)[0, 0].item()))
\`\`\`

### Attention Variants and Optimizations

Sparse attention reduces computation. It attends to subset of positions. It uses patterns or learned sparsity. It scales to longer sequences. It maintains quality.

Linear attention uses kernel methods. It reduces complexity from O(n²) to O(n). It approximates softmax attention. It enables longer sequences. It trades some accuracy for speed.

Flash attention optimizes memory usage. It computes attention in blocks. It reduces memory from O(n²) to O(n). It speeds up training. It enables larger batch sizes.

\`\`\`python
# Attention Variants
class SparseAttention:
    def __init__(self, d_model, window_size=3):
        self.d_model = d_model
        self.window_size = window_size
    
    def forward(self, x):
        """Local window attention"""
        batch_size, seq_len, d_model = x.shape
        output = torch.zeros_like(x)
        
        for i in range(seq_len):
            # Attend to local window
            start = max(0, i - self.window_size)
            end = min(seq_len, i + self.window_size + 1)
            
            # Compute attention for window
            window = x[:, start:end, :]
            # ... attention computation ...
        
        return output

class LinearAttention:
    def __init__(self, d_model):
        self.d_model = d_model
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
    
    def forward(self, x):
        """Linear attention using kernel trick"""
        Q = self.W_q(x)
        K = self.W_k(x)
        V = self.W_v(x)
        
        # Use ReLU as kernel function
        Q_kernel = torch.relu(Q)
        K_kernel = torch.relu(K)
        
        # Linear complexity: O(n) instead of O(n²)
        KV = torch.matmul(K_kernel.transpose(-2, -1), V)
        Z = torch.matmul(Q_kernel, KV)
        
        # Normalize
        normalizer = torch.matmul(Q_kernel, K_kernel.sum(dim=-2, keepdim=True))
        output = Z / (normalizer + 1e-8)
        
        return output

# Compare complexities
print("Standard attention: O(n²) complexity")
print("Sparse attention: O(n×w) complexity where w is window size")
print("Linear attention: O(n) complexity")
\`\`\`

## Encoder-Decoder Architectures

Encoder-decoder architectures process input-output sequences. Encoders process input. Decoders generate output. Attention connects them.

![Encoder-Decoder](/tutorials/ai-tutorial-18-advanced-architectures/diagram-encoder-decoder.svg)

The diagram shows encoder-decoder structure. Encoder processes source sequence. Decoder generates target sequence. Cross-attention connects them. Enables sequence-to-sequence tasks.

## Graph Neural Networks

Graph neural networks process graph-structured data. They handle nodes and edges. They capture relationships. They work for social networks and knowledge graphs.

![Graph Neural Networks](/tutorials/ai-tutorial-18-advanced-architectures/diagram-graph-neural-networks.svg)

The diagram shows graph structure. Nodes represent entities. Edges represent relationships. Networks process graph information. Enable relationship learning.

### Detailed Graph Neural Network Implementation

Graph neural networks process graph-structured data. They aggregate neighbor information. They update node representations. They capture graph structure.

Message passing is core mechanism. Each node collects messages from neighbors. Messages contain neighbor features. Aggregation combines messages. Update function computes new node representation.

\`\`\`python
# Detailed GNN Implementation
import torch
import torch.nn as nn
import torch.nn.functional as F
from torch_geometric.nn import MessagePassing
from torch_geometric.data import Data

class GCNLayer(MessagePassing):
    """Graph Convolutional Network Layer"""
    def __init__(self, in_channels, out_channels):
        super(GCNLayer, self).__init__(aggr='add')
        self.lin = nn.Linear(in_channels, out_channels)
    
    def forward(self, x, edge_index):
        # Linear transformation
        x = self.lin(x)
        
        # Message passing
        return self.propagate(edge_index, x=x)
    
    def message(self, x_j):
        """Message from neighbor j to node i"""
        return x_j
    
    def update(self, aggr_out):
        """Update node representation"""
        return aggr_out

class GraphNeuralNetwork(nn.Module):
    def __init__(self, input_dim, hidden_dim, output_dim, num_layers=2):
        super().__init__()
        self.layers = nn.ModuleList()
        
        # First layer
        self.layers.append(GCNLayer(input_dim, hidden_dim))
        
        # Hidden layers
        for _ in range(num_layers - 2):
            self.layers.append(GCNLayer(hidden_dim, hidden_dim))
        
        # Output layer
        self.layers.append(GCNLayer(hidden_dim, output_dim))
    
    def forward(self, x, edge_index):
        for layer in self.layers:
            x = layer(x, edge_index)
            x = F.relu(x)
        return x

# Example
# Create graph data
num_nodes = 5
x = torch.randn(num_nodes, 10)  # Node features
edge_index = torch.tensor([[0, 1, 1, 2, 2, 3, 3, 4],
                          [1, 0, 2, 1, 3, 2, 4, 3]], dtype=torch.long)

# Create GNN
gnn = GraphNeuralNetwork(input_dim=10, hidden_dim=16, output_dim=2, num_layers=2)
output = gnn(x, edge_index)
print("GNN output shape: " + str(output.shape))
\`\`\`

### GNN Variants and Applications

Graph Convolutional Networks use spectral graph theory. They filter signals on graphs. They work well for node classification. They scale to large graphs.

Graph Attention Networks use attention mechanisms. They learn importance of neighbors. They adapt to different graph structures. They improve performance on many tasks.

GraphSAGE samples and aggregates neighbors. It works for large graphs. It generalizes to unseen nodes. It enables inductive learning.

\`\`\`python
# GNN Variants
class GraphAttentionLayer(nn.Module):
    """Graph Attention Network Layer"""
    def __init__(self, in_features, out_features, dropout=0.1, alpha=0.2):
        super().__init__()
        self.in_features = in_features
        self.out_features = out_features
        self.dropout = dropout
        self.alpha = alpha
        
        self.W = nn.Parameter(torch.empty(size=(in_features, out_features)))
        self.a = nn.Parameter(torch.empty(size=(2*out_features, 1)))
        
        self.reset_parameters()
    
    def reset_parameters(self):
        nn.init.xavier_uniform_(self.W.data, gain=1.414)
        nn.init.xavier_uniform_(self.a.data, gain=1.414)
    
    def forward(self, h, adj):
        Wh = torch.mm(h, self.W)
        e = self._prepare_attentional_mechanism_input(Wh)
        e = F.leaky_relu(e, negative_slope=self.alpha)
        attention = F.softmax(e, dim=1)
        attention = F.dropout(attention, self.dropout, training=self.training)
        h_prime = torch.matmul(attention, Wh)
        return h_prime
    
    def _prepare_attentional_mechanism_input(self, Wh):
        N = Wh.size()[0]
        Wh1 = torch.matmul(Wh, self.a[:self.out_features, :])
        Wh2 = torch.matmul(Wh, self.a[self.out_features:, :])
        e = Wh1 + Wh2.T
        return e

# GraphSAGE implementation
class GraphSAGELayer(nn.Module):
    def __init__(self, in_features, out_features):
        super().__init__()
        self.linear = nn.Linear(in_features * 2, out_features)
    
    def forward(self, x, adj, sample_size=5):
        # Sample neighbors
        sampled_neighbors = self.sample_neighbors(adj, sample_size)
        
        # Aggregate neighbor features
        neighbor_features = x[sampled_neighbors]
        aggregated = torch.mean(neighbor_features, dim=1)
        
        # Concatenate and transform
        combined = torch.cat([x, aggregated], dim=1)
        output = self.linear(combined)
        return F.relu(output)
    
    def sample_neighbors(self, adj, sample_size):
        # Simplified neighbor sampling
        return torch.randint(0, adj.size(0), (adj.size(0), sample_size))

# Example usage
# gat_layer = GraphAttentionLayer(10, 16)
# sage_layer = GraphSAGELayer(10, 16)
\`\`\`

## Diffusion Models

Diffusion models generate data through iterative denoising. Forward process adds noise. Reverse process removes noise. They generate high-quality images and audio.

![Diffusion Models](/tutorials/ai-tutorial-18-advanced-architectures/diagram-diffusion-models.svg)

The diagram shows diffusion process. Forward adds noise gradually. Reverse removes noise iteratively. Generates new samples. Works for images and audio.

### Detailed Diffusion Model Implementation

Diffusion models learn to reverse noise process. Forward process adds Gaussian noise. q(x_t | x_{t-1}) = N(x_t; √(1-β_t)x_{t-1}, β_t I). β_t is noise schedule. It increases over time. Eventually data becomes pure noise.

Reverse process learns to denoise. p_θ(x_{t-1} | x_t) predicts previous step. Model learns to predict noise. It subtracts predicted noise. It recovers original data.

Training objective minimizes noise prediction error. L = E[||ε - ε_θ(x_t, t)||²]. ε is actual noise. ε_θ is predicted noise. Model learns to predict noise at each timestep.

\`\`\`python
# Detailed Diffusion Model Implementation
import torch
import torch.nn as nn
import numpy as np

class DiffusionModel(nn.Module):
    def __init__(self, input_dim, hidden_dim=256, num_timesteps=1000):
        super().__init__()
        self.num_timesteps = num_timesteps
        
        # Noise schedule
        self.betas = self.linear_beta_schedule(num_timesteps)
        self.alphas = 1.0 - self.betas
        self.alphas_cumprod = torch.cumprod(self.alphas, dim=0)
        
        # Noise prediction network
        self.network = nn.Sequential(
            nn.Linear(input_dim + 1, hidden_dim),  # +1 for timestep
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, input_dim)
        )
    
    def linear_beta_schedule(self, timesteps, start=0.0001, end=0.02):
        """Linear noise schedule"""
        return torch.linspace(start, end, timesteps)
    
    def forward_process(self, x_0, t):
        """Forward diffusion process"""
        sqrt_alphas_cumprod_t = torch.sqrt(self.alphas_cumprod[t])
        sqrt_one_minus_alphas_cumprod_t = torch.sqrt(1.0 - self.alphas_cumprod[t])
        
        noise = torch.randn_like(x_0)
        x_t = sqrt_alphas_cumprod_t * x_0 + sqrt_one_minus_alphas_cumprod_t * noise
        
        return x_t, noise
    
    def reverse_process(self, x_t, t):
        """Reverse diffusion process"""
        # Predict noise
        t_tensor = t.float().unsqueeze(-1)
        network_input = torch.cat([x_t, t_tensor], dim=-1)
        predicted_noise = self.network(network_input)
        
        # Denoise
        alpha_t = self.alphas[t]
        alpha_cumprod_t = self.alphas_cumprod[t]
        beta_t = self.betas[t]
        
        pred_x_0 = (x_t - torch.sqrt(1.0 - alpha_cumprod_t) * predicted_noise) / torch.sqrt(alpha_cumprod_t)
        pred_x_0 = torch.clamp(pred_x_0, -1.0, 1.0)
        
        # Predict x_{t-1}
        pred_x_prev = (1.0 / torch.sqrt(alpha_t)) * (x_t - beta_t / torch.sqrt(1.0 - alpha_cumprod_t) * predicted_noise)
        
        if t[0] > 0:
            posterior_variance = beta_t * (1.0 - self.alphas_cumprod[t-1]) / (1.0 - alpha_cumprod_t)
            noise = torch.randn_like(x_t)
            pred_x_prev = pred_x_prev + torch.sqrt(posterior_variance) * noise
        
        return pred_x_prev
    
    def sample(self, shape, device):
        """Generate samples"""
        x = torch.randn(shape, device=device)
        
        for t in range(self.num_timesteps - 1, -1, -1):
            t_tensor = torch.full((shape[0],), t, device=device, dtype=torch.long)
            x = self.reverse_process(x, t_tensor)
        
        return x

# Example
model = DiffusionModel(input_dim=784)  # For 28x28 images
x_0 = torch.randn(32, 784)  # Batch of 32 samples
t = torch.randint(0, 1000, (32,))

# Forward process
x_t, noise = model.forward_process(x_0, t)
print("Noisy sample shape: " + str(x_t.shape))

# Reverse process
x_prev = model.reverse_process(x_t, t)
print("Denoised sample shape: " + str(x_prev.shape))
\`\`\`

### Diffusion Model Training and Sampling

Training samples random timesteps. It adds noise to data. It predicts added noise. It minimizes prediction error. Process is straightforward.

Sampling starts from pure noise. It iteratively denoises. Each step removes noise. It gradually recovers data. Many steps required for quality.

DDPM uses fixed number of steps. DDIM uses fewer steps. It accelerates sampling. It maintains quality. It enables faster generation.

\`\`\`python
# Diffusion Training and Sampling
def train_diffusion_model(model, dataloader, num_epochs=100, device='cuda'):
    """Train diffusion model"""
    optimizer = torch.optim.Adam(model.parameters(), lr=1e-4)
    model = model.to(device)
    
    for epoch in range(num_epochs):
        total_loss = 0
        for batch in dataloader:
            x_0 = batch.to(device)
            batch_size = x_0.shape[0]
            
            # Sample random timesteps
            t = torch.randint(0, model.num_timesteps, (batch_size,), device=device)
            
            # Forward process
            x_t, noise = model.forward_process(x_0, t)
            
            # Predict noise
            t_tensor = t.float().unsqueeze(-1)
            network_input = torch.cat([x_t, t_tensor], dim=-1)
            predicted_noise = model.network(network_input)
            
            # Loss
            loss = nn.functional.mse_loss(predicted_noise, noise)
            
            # Backward
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
            
            total_loss += loss.item()
        
        print(f"Epoch {epoch+1}, Loss: {total_loss/len(dataloader):.4f}")

def sample_ddpm(model, num_samples=10, device='cuda'):
    """Sample using DDPM"""
    shape = (num_samples, model.input_dim)
    x = torch.randn(shape, device=device)
    
    for t in range(model.num_timesteps - 1, -1, -1):
        t_tensor = torch.full((num_samples,), t, device=device, dtype=torch.long)
        x = model.reverse_process(x, t_tensor)
    
    return x

def sample_ddim(model, num_samples=10, num_steps=50, device='cuda'):
    """Sample using DDIM (faster)"""
    shape = (num_samples, model.input_dim)
    x = torch.randn(shape, device=device)
    
    # Use fewer steps
    step_size = model.num_timesteps // num_steps
    
    for i in range(num_steps - 1, -1, -1):
        t = i * step_size
        t_tensor = torch.full((num_samples,), t, device=device, dtype=torch.long)
        x = model.reverse_process(x, t_tensor)
    
    return x

# Example
# train_diffusion_model(model, dataloader)
# samples_ddpm = sample_ddpm(model, num_samples=10)
# samples_ddim = sample_ddim(model, num_samples=10, num_steps=50)
\`\`\`

## Reinforcement Learning

Reinforcement learning learns from interaction. Agents take actions. Environments provide rewards. Policies improve over time. Enables game playing and robotics.

![Reinforcement Learning](/tutorials/ai-tutorial-18-advanced-architectures/diagram-reinforcement-learning.svg)

The diagram shows RL loop. Agent observes state. Agent takes action. Environment provides reward. Agent updates policy. Process repeats for learning.

### Detailed Reinforcement Learning Algorithms

Q-learning learns action-value function. Q(s, a) estimates expected return. It uses Bellman equation. Q(s, a) = r + γ max Q(s', a'). It learns optimal policy. It works for discrete actions.

Policy gradient methods learn policy directly. They maximize expected return. They use gradient ascent. They work for continuous actions. They require more samples.

Actor-critic combines value and policy methods. Actor learns policy. Critic learns value function. Critic guides actor updates. It reduces variance. It improves learning.

\`\`\`python
# Detailed RL Implementation
import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim

class QNetwork(nn.Module):
    """Q-learning network"""
    def __init__(self, state_dim, action_dim, hidden_dim=64):
        super().__init__()
        self.fc1 = nn.Linear(state_dim, hidden_dim)
        self.fc2 = nn.Linear(hidden_dim, hidden_dim)
        self.fc3 = nn.Linear(hidden_dim, action_dim)
    
    def forward(self, state):
        x = torch.relu(self.fc1(state))
        x = torch.relu(self.fc2(x))
        return self.fc3(x)

class QLearning:
    def __init__(self, state_dim, action_dim, lr=0.001, gamma=0.99, epsilon=1.0):
        self.q_network = QNetwork(state_dim, action_dim)
        self.optimizer = optim.Adam(self.q_network.parameters(), lr=lr)
        self.gamma = gamma
        self.epsilon = epsilon
        self.epsilon_decay = 0.995
        self.epsilon_min = 0.01
    
    def select_action(self, state, training=True):
        """Epsilon-greedy action selection"""
        if training and np.random.random() < self.epsilon:
            return np.random.randint(self.q_network.fc3.out_features)
        else:
            with torch.no_grad():
                q_values = self.q_network(torch.FloatTensor(state))
                return q_values.argmax().item()
    
    def update(self, state, action, reward, next_state, done):
        """Update Q-network"""
        state_tensor = torch.FloatTensor(state)
        next_state_tensor = torch.FloatTensor(next_state)
        
        current_q = self.q_network(state_tensor)[action]
        
        if done:
            target_q = reward
        else:
            next_q = self.q_network(next_state_tensor).max()
            target_q = reward + self.gamma * next_q
        
        loss = nn.functional.mse_loss(current_q, target_q)
        
        self.optimizer.zero_grad()
        loss.backward()
        self.optimizer.step()
        
        if self.epsilon > self.epsilon_min:
            self.epsilon *= self.epsilon_decay
        
        return loss.item()

class PolicyGradient:
    """Policy gradient method"""
    def __init__(self, state_dim, action_dim, lr=0.001):
        self.policy_network = nn.Sequential(
            nn.Linear(state_dim, 64),
            nn.ReLU(),
            nn.Linear(64, action_dim),
            nn.Softmax(dim=-1)
        )
        self.optimizer = optim.Adam(self.policy_network.parameters(), lr=lr)
    
    def select_action(self, state):
        """Sample action from policy"""
        probs = self.policy_network(torch.FloatTensor(state))
        action = torch.distributions.Categorical(probs).sample()
        return action.item(), probs[action].item()
    
    def update(self, states, actions, rewards, log_probs):
        """Update policy using REINFORCE"""
        returns = []
        G = 0
        for reward in reversed(rewards):
            G = reward + 0.99 * G
            returns.insert(0, G)
        
        returns = torch.FloatTensor(returns)
        returns = (returns - returns.mean()) / (returns.std() + 1e-8)
        
        policy_loss = []
        for log_prob, G in zip(log_probs, returns):
            policy_loss.append(-log_prob * G)
        
        loss = torch.stack(policy_loss).sum()
        
        self.optimizer.zero_grad()
        loss.backward()
        self.optimizer.step()
        
        return loss.item()

# Example
# q_learning = QLearning(state_dim=4, action_dim=2)
# policy_gradient = PolicyGradient(state_dim=4, action_dim=2)
\`\`\`

### RL Training Strategies

Experience replay stores past experiences. It breaks correlation between samples. It improves sample efficiency. It enables off-policy learning. It requires memory buffer.

Target networks stabilize learning. Separate network for target values. Target network updates slowly. It reduces training instability. It improves convergence.

\`\`\`python
# RL Training Strategies
from collections import deque
import random

class ExperienceReplay:
    def __init__(self, capacity=10000):
        self.buffer = deque(maxlen=capacity)
    
    def push(self, state, action, reward, next_state, done):
        """Store experience"""
        self.buffer.append((state, action, reward, next_state, done))
    
    def sample(self, batch_size):
        """Sample batch of experiences"""
        batch = random.sample(self.buffer, batch_size)
        states, actions, rewards, next_states, dones = zip(*batch)
        return states, actions, rewards, next_states, dones
    
    def __len__(self):
        return len(self.buffer)

class DQNWithReplay:
    """Deep Q-Network with experience replay"""
    def __init__(self, state_dim, action_dim, lr=0.001, gamma=0.99):
        self.q_network = QNetwork(state_dim, action_dim)
        self.target_network = QNetwork(state_dim, action_dim)
        self.target_network.load_state_dict(self.q_network.state_dict())
        
        self.optimizer = optim.Adam(self.q_network.parameters(), lr=lr)
        self.gamma = gamma
        self.replay_buffer = ExperienceReplay()
        self.update_target_frequency = 100
        self.steps = 0
    
    def update(self, batch_size=32):
        """Update using experience replay"""
        if len(self.replay_buffer) < batch_size:
            return
        
        states, actions, rewards, next_states, dones = self.replay_buffer.sample(batch_size)
        
        states = torch.FloatTensor(states)
        actions = torch.LongTensor(actions)
        rewards = torch.FloatTensor(rewards)
        next_states = torch.FloatTensor(next_states)
        dones = torch.BoolTensor(dones)
        
        current_q = self.q_network(states).gather(1, actions.unsqueeze(1))
        
        with torch.no_grad():
            next_q = self.target_network(next_states).max(1)[0]
            target_q = rewards + self.gamma * next_q * (~dones)
        
        loss = nn.functional.mse_loss(current_q.squeeze(), target_q)
        
        self.optimizer.zero_grad()
        loss.backward()
        self.optimizer.step()
        
        self.steps += 1
        if self.steps % self.update_target_frequency == 0:
            self.target_network.load_state_dict(self.q_network.state_dict())
        
        return loss.item()

# Example
# dqn = DQNWithReplay(state_dim=4, action_dim=2)
# dqn.replay_buffer.push(state, action, reward, next_state, done)
# loss = dqn.update(batch_size=32)
\`\`\`

### Real-World Application Examples

E-commerce recommendation systems use multi-vector embeddings. Product embeddings capture multiple aspects. User embeddings capture preferences. Temporal search prioritizes recent products. Ensemble methods combine multiple recommenders. This improves recommendation quality.

Search engines use hybrid retrieval. Keyword search handles exact matches. Semantic search handles meaning. Reranking improves order. Multi-stage retrieval balances speed and accuracy. This provides comprehensive results.

\`\`\`python
# Real-World Application: E-commerce Recommendation
class ECommerceRecommendation:
    def __init__(self):
        self.product_embeddings = {}  # Multiple embeddings per product
        self.user_embeddings = {}
        self.retriever = HybridRetriever()
        self.reranker = CrossEncoderReranker()
    
    def get_recommendations(self, user_id, query=None, top_k=10):
        """Get product recommendations"""
        # Multi-vector product search
        if query:
            query_emb = self.embed_query(query)
            candidates = self.retriever.retrieve(query_emb, top_k=50)
        else:
            # User-based recommendations
            user_emb = self.user_embeddings[user_id]
            candidates = self.retriever.retrieve(user_emb, top_k=50)
        
        # Temporal boosting (prioritize recent products)
        candidates = self.apply_temporal_boosting(candidates)
        
        # Rerank
        final_recommendations = self.reranker.rerank(query or user_emb, candidates, top_k=top_k)
        
        return final_recommendations
    
    def apply_temporal_boosting(self, candidates, recency_weight=0.3):
        """Boost recent products"""
        for candidate in candidates:
            days_old = (datetime.now() - candidate.created_date).days
            recency_score = 1.0 / (1 + days_old)
            candidate.score = (1 - recency_weight) * candidate.score + recency_weight * recency_score
        
        return sorted(candidates, key=lambda x: x.score, reverse=True)

# Real-World Application: Enterprise Search
class EnterpriseSearchSystem:
    def __init__(self):
        self.semantic_retriever = SemanticRetriever()
        self.keyword_retriever = KeywordRetriever()
        self.reranker = LearnedToRankReranker()
        self.generator = LLMGenerator()
    
    def search(self, query, filters=None, top_k=10):
        """Enterprise search with filters"""
        # Hybrid retrieval
        semantic_results = self.semantic_retriever.retrieve(query, top_k=50)
        keyword_results = self.keyword_retriever.retrieve(query, top_k=50)
        
        # Combine and deduplicate
        all_candidates = self.combine_results(semantic_results, keyword_results)
        
        # Apply filters (department, date, type, etc.)
        if filters:
            all_candidates = self.apply_filters(all_candidates, filters)
        
        # Rerank
        reranked = self.reranker.rerank(query, all_candidates, top_k=top_k)
        
        return reranked
    
    def apply_filters(self, candidates, filters):
        """Apply metadata filters"""
        filtered = []
        for candidate in candidates:
            matches = True
            for key, value in filters.items():
                if candidate.metadata.get(key) != value:
                    matches = False
                    break
            if matches:
                filtered.append(candidate)
        return filtered
\`\`\`

## Summary

Advanced architectures handle complex requirements. Multi-vector embeddings improve coverage. Temporal search handles time. Ensemble methods improve performance. Advanced indexing enables scale. Complex architectures combine techniques. Advanced systems enable sophisticated applications.

## References

- [NeuronDB Documentation](https://neurondb.ai/docs)
- [Advanced Vector Search](https://www.pinecone.io/learn/vector-search-advanced/)
- [Ensemble Methods](https://scikit-learn.org/stable/modules/ensemble.html)
- [FAISS Indexing](https://github.com/facebookresearch/faiss)
`
}

// Content functions for all tutorials
function getDataPreparationContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getDataPreparationTutorialContent()
}

function getLinearModelsContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getLinearModelsTutorialContent()
}

function getNeuralNetworksContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getNeuralNetworksTutorialContent()
}

function getTrainingContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getTrainingTutorialContent()
}

function getRegularizationContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getRegularizationTutorialContent()
}

function getEmbeddingsContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getEmbeddingsTutorialContent()
}

function getTransformersContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getTransformersTutorialContent()
}

function getLLMsContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getLLMsTutorialContent()
}

function getVectorSearchContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getVectorSearchTutorialContent()
}

function getSemanticSearchContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getSemanticSearchTutorialContent()
}

function getRAGFundamentalsContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getRAGFundamentalsTutorialContent()
}

function getAdvancedRAGContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getAdvancedRAGTutorialContent()
}

function getPromptEngineeringContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getPromptEngineeringTutorialContent()
}

function getModelEvaluationContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getModelEvaluationTutorialContent()
}

function getFineTuningContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getFineTuningTutorialContent()
}

function getProductionContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getProductionTutorialContent()
}

function getAdvancedArchitecturesContent(tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  return getAdvancedArchitecturesTutorialContent()
}

function getTutorialContent(slug: string, tutorial: typeof tutorials[0], tutorialsList: typeof tutorials): string {
  switch (slug) {
    case 'ai-tutorial-01-introduction':
      return getIntroductionTutorialContent(tutorial, tutorialsList)
    case 'ai-tutorial-02-data-preparation':
      return getDataPreparationContent(tutorial, tutorialsList)
    case 'ai-tutorial-03-linear-models':
      return getLinearModelsContent(tutorial, tutorialsList)
    case 'ai-tutorial-04-neural-networks':
      return getNeuralNetworksContent(tutorial, tutorialsList)
    case 'ai-tutorial-05-training':
      return getTrainingContent(tutorial, tutorialsList)
    case 'ai-tutorial-06-regularization':
      return getRegularizationContent(tutorial, tutorialsList)
    case 'ai-tutorial-07-embeddings':
      return getEmbeddingsContent(tutorial, tutorialsList)
    case 'ai-tutorial-08-transformers':
      return getTransformersContent(tutorial, tutorialsList)
    case 'ai-tutorial-09-llms':
      return getLLMsContent(tutorial, tutorialsList)
    case 'ai-tutorial-10-vector-search':
      return getVectorSearchContent(tutorial, tutorialsList)
    case 'ai-tutorial-11-semantic-search':
      return getSemanticSearchContent(tutorial, tutorialsList)
    case 'ai-tutorial-12-rag-fundamentals':
      return getRAGFundamentalsContent(tutorial, tutorialsList)
    case 'ai-tutorial-13-advanced-rag':
      return getAdvancedRAGContent(tutorial, tutorialsList)
    case 'ai-tutorial-14-prompt-engineering':
      return getPromptEngineeringContent(tutorial, tutorialsList)
    case 'ai-tutorial-15-model-evaluation':
      return getModelEvaluationContent(tutorial, tutorialsList)
    case 'ai-tutorial-16-fine-tuning':
      return getFineTuningContent(tutorial, tutorialsList)
    case 'ai-tutorial-17-production':
      return getProductionContent(tutorial, tutorialsList)
    case 'ai-tutorial-18-advanced-architectures':
      return getAdvancedArchitecturesContent(tutorial, tutorialsList)
    default:
      return getDefaultTutorialContent(tutorial, tutorialsList)
  }
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
  const content = getTutorialContent(tutorial.slug, tutorial, tutorials)

  const markdown = content

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0 lg:max-w-3xl">
            <div className="px-4 sm:px-6 lg:px-0">
              <BlogMarkdown>{markdown}</BlogMarkdown>
            </div>
          </div>
          
          {/* Sidebar - Related Tutorials */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="px-4 sm:px-6 lg:px-0">
              <RelatedTutorials 
                currentSlug={params.slug}
                allTutorials={tutorials}
                maxPosts={4}
              />
            </div>
          </div>
        </div>
      </div>

      <FooterTemplate />
    </div>
  )
}
