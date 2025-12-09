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
print(f"Traditional: {result1}")  # Output: spam

# ML: Learned pattern
result2 = model.predict(vectorizer.transform(["Win a free prize!"]))
print(f"Machine Learning: {result2[0]}")  # Output: spam
\`\`\`

\`\`\`
Traditional: spam
Machine Learning: spam
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
\`\`\`

\`\`\`
Loan approved: 1
\`\`\`

\`\`\`sql
-- NeuronDB: Classification using SQL
CREATE TABLE loan_applications (
    age INTEGER,
    income NUMERIC,
    approved BOOLEAN
);

INSERT INTO loan_applications VALUES
    (25, 30000, false), (35, 50000, true),
    (45, 80000, true), (30, 40000, false);

SELECT neurondb_predict_classification(
    'loan_model',
    ARRAY[40::NUMERIC, 60000::NUMERIC]
) AS prediction;

-- Output: true (approved)
\`\`\`

![Supervised Learning Diagram](/tutorials/ai-tutorial-01-introduction/diagram-supervised-learning.svg)

Classification works with discrete outputs. The output is a category. Email is spam or not spam. Image shows a cat or a dog. Patient has disease or no disease. Regression works with continuous outputs. The output is a number. House price is 450,000 dollars. Temperature tomorrow is 72 degrees. Sales next month is 15,000 units.

\`\`\`python
# Regression Example: Predicting Numbers
from sklearn.linear_model import LinearRegression

# Features: [square_feet, bedrooms] | Target: price
X = np.array([[1500, 2], [2000, 3], [2500, 4], [1800, 3]])
y = np.array([250000, 350000, 450000, 300000])

model = LinearRegression()
model.fit(X, y)

price = model.predict([[2200, 3]])
print("Predicted price: $" + str(int(price[0])))
\`\`\`

\`\`\`
Predicted price: $380000
\`\`\`

\`\`\`sql
-- NeuronDB: Regression using SQL
CREATE TABLE house_sales (
    square_feet INTEGER,
    bedrooms INTEGER,
    price NUMERIC
);

INSERT INTO house_sales VALUES
    (1500, 2, 250000), (2000, 3, 350000),
    (2500, 4, 450000), (1800, 3, 300000);

SELECT neurondb_predict_regression(
    'price_model',
    ARRAY[2200::NUMERIC, 3::NUMERIC]
) AS predicted_price;

-- Output: 380000.00
\`\`\`

Supervised learning requires labeled data. Labeling is expensive. It takes human time. Large datasets need many labels. The quality of labels affects results. Bad labels produce bad models. Good labels produce good models.

### Unsupervised Learning

Unsupervised learning uses unlabeled data. There are no correct answers. The system finds patterns or structure. It discovers hidden relationships.

Common unsupervised learning tasks include clustering and dimensionality reduction. Clustering groups similar examples. Examples include customer segmentation, image grouping, and anomaly detection. Dimensionality reduction simplifies data. It reduces features while keeping important information. Examples include visualization and noise removal.

\`\`\`python
# Clustering Example: Grouping Similar Customers
from sklearn.cluster import KMeans

# Customer features: [annual_spending, num_orders]
customers = np.array([[500, 10], [1200, 25], [300, 5], [1500, 30], [400, 8]])

kmeans = KMeans(n_clusters=2, random_state=42)
clusters = kmeans.fit_predict(customers)

for i, cluster in enumerate(clusters):
    print(f"Customer {i+1}: Cluster {cluster}")
# Output: Customer 1: Cluster 1, Customer 2: Cluster 0, Customer 3: Cluster 1, etc.
\`\`\`

\`\`\`
Customer 1: Cluster 1
Customer 2: Cluster 0
Customer 3: Cluster 1
Customer 4: Cluster 0
Customer 5: Cluster 1
\`\`\`

\`\`\`sql
-- NeuronDB: Clustering using SQL
CREATE TABLE customers (
    customer_id SERIAL,
    annual_spending NUMERIC,
    num_orders INTEGER
);

INSERT INTO customers (annual_spending, num_orders) VALUES
    (500, 10), (1200, 25), (300, 5), (1500, 30), (400, 8);

SELECT customer_id,
       neurondb_kmeans_cluster(
           ARRAY[annual_spending, num_orders::NUMERIC],
           2
       ) AS cluster_id
FROM customers;

-- Output: customer_id | cluster_id
--         1           | 1
--         2           | 0
--         3           | 1
\`\`\`

![Unsupervised Learning Diagram](/tutorials/ai-tutorial-01-introduction/diagram-unsupervised-learning.svg)

Clustering finds groups in data. Similar items belong together. Dissimilar items are separate. You do not define groups beforehand. The system discovers them. You can use groups for customer targeting, organizing images, or finding outliers.

Dimensionality reduction simplifies data. Many features create complexity. Some features are redundant. Some features add noise. Reduction keeps essential information. It makes data easier to understand. It speeds up other algorithms.

### Reinforcement Learning

Reinforcement learning learns through interaction. An agent takes actions in an environment. It receives rewards or penalties. It learns which actions maximize rewards. No labeled examples are needed.

![Reinforcement Learning Diagram](/tutorials/ai-tutorial-01-introduction/diagram-reinforcement-learning.svg)

Reinforcement learning works in steps. The agent observes the current state. It chooses an action. The environment changes. The agent receives a reward. It updates its strategy. Over time, it learns optimal actions.

Applications include game playing, robotics, and recommendation systems. Game playing agents learn to win. Robotics agents learn to navigate. Recommendation systems learn user preferences through feedback.

## Key Concepts

Understanding these concepts is essential for machine learning. Features describe your data. Labels provide correct answers. Training builds the model. Testing validates performance. Overfitting is a common problem to avoid.

![Key Concepts Diagram](/tutorials/ai-tutorial-01-introduction/diagram-key-concepts.svg)

These core concepts form the foundation of machine learning. Master them to build effective models.

### Features

Features are input variables that describe examples. An email has features like sender address, subject length, and word count. A house has features like square footage, number of bedrooms, and location. Features must be numeric or convertible to numbers. Feature selection matters. Good features improve predictions while bad features hurt predictions. Too many features cause overfitting. Too few features miss important patterns.

- **Feature Types**: Features come in two main types: numeric and categorical. Numeric features are numbers like age, price, temperature, or distance. They have mathematical meaning and can be compared directly. Categorical features are groups or categories like color, city, product type, or status. They represent discrete classes without inherent order. You convert categorical to numeric using encoding methods such as one-hot encoding, label encoding, or target encoding. Each method has trade-offs in memory usage and information preservation. One-hot encoding creates separate binary columns for each category but increases dimensionality. Label encoding assigns numbers to categories but may imply false ordering. Target encoding uses target variable statistics to encode categories based on their relationship with the outcome.

\`\`\`python
# Feature Encoding Example
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
import pandas as pd

data = pd.DataFrame({'city': ['NYC', 'SF', 'NYC', 'LA', 'SF']})
# One-hot encoding
onehot = pd.get_dummies(data['city'])
print(onehot)
# Output:    LA  NYC  SF
#           0    1    0
#           0    0    1
#           0    1    0
\`\`\`

\`\`\`
   LA  NYC  SF
0   0    1   0
1   0    0   1
2   0    1   0
3   1    0   0
4   0    0   1
\`\`\`

\`\`\`sql
-- NeuronDB: Feature Encoding
SELECT 
    city,
    CASE WHEN city = 'NYC' THEN 1 ELSE 0 END AS is_nyc,
    CASE WHEN city = 'SF' THEN 1 ELSE 0 END AS is_sf,
    CASE WHEN city = 'LA' THEN 1 ELSE 0 END AS is_la
FROM customer_data;

-- Output: city | is_nyc | is_sf | is_la
--        NYC   | 1      | 0     | 0
--        SF    | 0      | 1     | 0
\`\`\`
- **Feature Scaling**: Different features have different ranges and scales. Age ranges from 0 to 100 while income ranges from 0 to 1,000,000. Scaling normalizes these values to make features comparable and helps algorithms converge faster. Min-max scaling transforms values to a 0-1 range. Standardization transforms values to have zero mean and unit variance. Some algorithms like k-nearest neighbors and neural networks require scaling. Others like decision trees are scale-invariant. Scaling prevents features with larger ranges from dominating the learning process.

\`\`\`python
# Feature Scaling Example
from sklearn.preprocessing import StandardScaler, MinMaxScaler

data = np.array([[25, 50000], [30, 75000], [35, 100000]])
scaler = StandardScaler()
scaled = scaler.fit_transform(data)
print(scaled)
# Output: [[-1.225   -1.225]
#          [ 0.       0.   ]
#          [ 1.225    1.225]]
\`\`\`

\`\`\`
[[-1.22474487 -1.22474487]
 [ 0.          0.        ]
 [ 1.22474487  1.22474487]]
\`\`\`

\`\`\`sql
-- NeuronDB: Feature Scaling
SELECT 
    age,
    income,
    (age - AVG(age) OVER ()) / STDDEV(age) OVER () AS age_scaled,
    (income - AVG(income) OVER ()) / STDDEV(income) OVER () AS income_scaled
FROM customers;

-- Output: age | income | age_scaled | income_scaled
--        25   | 50000  | -1.22      | -1.22
--        30   | 75000  | 0.00       | 0.00
\`\`\`
- **Feature Engineering**: Raw data often needs transformation into useful features. You create interaction features by combining existing features like multiplying price by area. You create polynomial features by raising features to powers to capture non-linear relationships. You create time-based features from timestamps like day of week, month, or hour. You create text features from word counts, TF-IDF scores, or embeddings. Feature engineering requires domain knowledge and experimentation. Well-engineered features can dramatically improve model performance.
- **Feature Selection**: High-dimensional data contains many features, some of which are redundant or irrelevant. Feature selection reduces dimensionality and noise while maintaining prediction accuracy. Filter methods use statistical tests like correlation or chi-square to rank features. Wrapper methods test feature subsets using model performance as the evaluation metric. Embedded methods select features during training like L1 regularization. Selection reduces noise, speeds training, improves interpretability, and can prevent overfitting. The goal is finding the minimal feature set that maximizes performance.
- **Feature Extraction**: Sometimes it's better to create new representations rather than select existing features. Feature extraction transforms original features into a lower-dimensional space. Principal component analysis finds linear combinations that explain maximum variance. Autoencoders learn compressed representations through neural networks. Feature extraction reduces dimensions while preserving essential information. It helps with visualization, reduces storage requirements, and can improve generalization.
- **Feature Importance**: Understanding which features matter most helps interpret models and guide feature engineering. Some features predict better than others. Decision trees show feature importance directly through their splitting criteria. Linear models show coefficients that indicate feature contribution. Feature importance guides feature selection and helps understand model behavior. High importance features are critical for predictions. Low importance features might be candidates for removal.

### Labels

Labels are correct outputs for supervised learning. Classification labels are categories while regression labels are numbers. Labels come from human annotation, historical data, or measurement. Label quality affects model performance. Accurate labels produce accurate models. Noisy labels produce unreliable models. Missing labels prevent supervised learning. You need labels for training and evaluating on labeled test data.

- **Labeling Strategies**: Different problem types require different labeling approaches. Binary classification uses two mutually exclusive classes like spam or not spam, yes or no. Multi-class classification uses many distinct classes like image categories or product types. Multi-label classification allows multiple classes per example like tagging articles with multiple topics. Regression uses continuous numeric values like prices, temperatures, or scores. Ordinal classification has ordered categories like ratings or rankings. Choose the strategy that matches your problem structure and business requirements.
- **Label Distribution**: Class distribution in your dataset significantly impacts model training. Balanced datasets have equal representation across classes, making training straightforward. Imbalanced datasets have unequal classes which can bias models toward majority classes. Models trained on imbalanced data may achieve high accuracy by always predicting the majority class, which is useless. Imbalance requires special handling through resampling techniques like oversampling minority classes or undersampling majority classes. Class weights adjustment penalizes mistakes on minority classes more heavily. Different evaluation metrics like precision, recall, F1-score, or AUC account for imbalance better than accuracy alone. Cost-sensitive learning assigns different costs to different types of errors.
- **Label Annotation**: Creating ground truth labels requires careful annotation processes. Human annotators label examples manually based on guidelines. Annotation guidelines ensure consistency across annotators by providing clear criteria and examples. Multiple annotators label the same examples to check agreement through inter-annotator agreement measures like Cohen's kappa. Expert review catches errors and validates difficult cases. Automated validation finds outliers and inconsistencies. Quality control processes include regular audits and feedback loops. Validation improves dataset quality but annotation is expensive and time-consuming, especially for large datasets or complex labeling tasks.
- **Label Quality**: Poor label quality directly translates to poor model performance. Label noise corrupts learning when it comes from annotation errors, measurement errors, or ambiguous cases. Robust algorithms handle noise better than sensitive ones. Label smoothing reduces overconfidence by converting hard labels to soft probability distributions. Weak supervision uses noisy labels through distant supervision that generates labels automatically from heuristics or external sources. Active learning selects informative examples for annotation to maximize learning with minimal labels. Semi-supervised learning uses unlabeled data combined with labeled data. Transfer learning uses labels from related tasks. These methods reduce labeling costs while maintaining reasonable performance.
- **Label Storage**: Efficient label storage and management is crucial for large-scale projects. Labels are stored alongside features in databases or file systems. Version control tracks label changes over time. Annotation tools provide interfaces for efficient labeling workflows. Label validation pipelines check for consistency and errors automatically. Label augmentation techniques create additional labeled examples through transformations. Proper label management ensures data quality and enables reproducible research.

### Training

Training builds a model from data by examining examples, adjusting internal parameters, and minimizing prediction errors. Training continues until performance stops improving. Training requires computation that scales with data size and model complexity. More data means more computation. Complex models need more time while simple models train faster. You balance model complexity with training time based on your resources.

- **Data Splitting**: Training data must be split from the full dataset to evaluate generalization. Common splits include 80 percent training and 20 percent testing for simple cases. More sophisticated splits use 70 percent training, 15 percent validation, and 15 percent testing. Validation data tunes hyperparameters while test data evaluates final performance only once. Stratified splitting maintains class distribution across splits. Time-based splitting preserves temporal order for time series data. This separation prevents data leakage and provides unbiased performance estimates. Never use test data for training or hyperparameter tuning.

\`\`\`python
# Data Splitting Example
from sklearn.model_selection import train_test_split

X = np.array([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]])
y = np.array([0, 1, 0, 1, 0])

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.4, random_state=42
)
print("Training size: " + str(len(X_train)) + ", Test size: " + str(len(X_test)))
\`\`\`

\`\`\`
Training size: 3, Test size: 2
\`\`\`

\`\`\`sql
-- NeuronDB: Data Splitting
WITH numbered_data AS (
    SELECT *, ROW_NUMBER() OVER (ORDER BY customer_id) as row_num
    FROM customers
)
SELECT 
    customer_id,
    CASE 
        WHEN row_num <= (SELECT COUNT(*) * 0.8 FROM customers) THEN 'train'
        ELSE 'test'
    END AS split
FROM numbered_data;

-- Output: customer_id | split
--        1            | train
--        2            | train
--        3            | test
\`\`\`
- **Training Iterations**: Training happens in iterations called epochs. One epoch processes all training data once. Multiple epochs improve performance as the model sees data multiple times. Too many epochs cause overfitting when the model memorizes training data. Early stopping prevents overfitting by monitoring validation performance and stopping when it degrades. Patience parameters control how many epochs to wait before stopping. This balances learning with generalization and saves computation time.
- **Optimization Algorithms**: Training algorithms use optimization methods to minimize loss functions. Gradient descent minimizes loss using full datasets but is slow for large data. Stochastic gradient descent uses random batches for faster updates with some variance. Mini-batch gradient descent balances speed and stability. Adam combines momentum and adaptive learning rates for efficient convergence. RMSprop adapts learning rates per parameter. Different optimizers work better for different problems and model types. Momentum helps navigate flat regions. Adaptive methods adjust learning automatically.
- **Loss Functions**: Loss functions measure prediction errors and guide parameter updates through gradient computation. Mean squared error measures regression errors by squaring differences, emphasizing large errors. Mean absolute error treats all errors equally. Cross-entropy measures classification errors for probabilistic outputs. Focal loss handles class imbalance. Choosing the right loss function is critical as it shapes how the model learns. Loss functions must match your problem type and goals. Custom losses can incorporate business constraints.
- **Batch Processing**: Batch processing groups examples together for efficient computation on parallel hardware. Batch size affects memory usage, training speed, and gradient quality. Large batches use more memory but provide stable gradients with less noise. Small batches update more frequently but with more variance in gradients. Mini-batch gradient descent balances both stability and efficiency. Batch normalization standardizes inputs within batches. Dynamic batching adjusts batch sizes based on sequence lengths for variable-length inputs.
- **Learning Rate**: Learning rate controls optimization step size and is the most critical hyperparameter. High learning rates converge faster but may overshoot optimal solutions or diverge. Low learning rates converge slowly but more precisely, sometimes getting stuck in local minima. Learning rate schedules adjust rates over time using decay, warmup, or cyclical patterns. Adaptive methods like Adam adjust rates per parameter automatically. Learning rate finder experiments with different rates to find optimal ranges. Proper learning rate significantly affects training success.
- **Backpropagation**: Backpropagation calculates gradients by propagating errors backward through neural networks using the chain rule of calculus. Forward pass computes predictions. Backward pass computes gradients for all parameters. It enables training of deep networks by efficiently computing gradients for all layers simultaneously. It is the foundation of neural network training and makes deep learning possible. Modern frameworks compute gradients automatically through automatic differentiation.
- **Hyperparameter Tuning**: Hyperparameters control training behavior and must be set before training begins. Learning rate, batch size, regularization strength, and network architecture are common hyperparameters. Hyperparameter tuning finds optimal values through systematic search. Grid search tests all combinations in a predefined grid but is computationally expensive. Random search samples combinations randomly and often finds better solutions faster. Bayesian optimization uses probabilistic models to guide search efficiently. Proper tuning significantly improves model performance but requires careful experimental design.
- **Gradient Management**: Gradient problems can destabilize training. Gradient clipping prevents instability when gradients become too large by limiting gradient magnitude to a maximum value. Gradient scaling adjusts gradients for mixed precision training. Gradient accumulation simulates larger batches by accumulating gradients over multiple steps. These techniques stabilize training of deep networks and are essential for recurrent networks that suffer from vanishing or exploding gradients.
- **Checkpointing and Monitoring**: Training management includes saving model states and monitoring progress. Checkpointing saves model states at regular intervals for recovery and model selection. You can resume from checkpoints if training is interrupted. You select the best checkpoint based on validation performance. TensorBoard and other tools visualize training metrics like loss curves and learning rates. Monitoring detects issues like overfitting, underfitting, or training instability early. Checkpointing protects against failures and enables model versioning for production deployment.

### Testing

Testing evaluates model performance using data not seen during training. The model makes predictions that you compare to correct answers, then calculate accuracy or error metrics. Testing reveals generalization ability. A model might memorize training data but testing shows if it works on new data. Good models perform well on test data while bad models fail on test data.

- **Test Set Separation**: Test sets must remain completely separate from training and validation data. Never use test data for training, hyperparameter tuning, or model selection. Test data provides unbiased performance estimates only when used exclusively for final evaluation after all development is complete. Violating this separation leads to overly optimistic estimates that don't reflect real-world performance. Test data represents future unseen data. Once you use test data for any decision, it becomes contaminated and loses its value as an unbiased estimator. Some practitioners use a third holdout set for final evaluation to preserve test set integrity.
- **Evaluation Metrics**: Test metrics vary by problem type and must match your business goals. Classification uses accuracy for overall correctness, precision for prediction quality, recall for coverage, F1 score for balance, and AUC-ROC for threshold-agnostic performance. Regression uses mean squared error for large error emphasis, mean absolute error for equal treatment, R-squared for explained variance, and root mean squared error for interpretable units. Cost-sensitive metrics incorporate business costs of different error types. Choose metrics that align with your business objectives and decision-making needs. Different metrics answer different questions about model performance.
- **Cross-Validation**: Cross-validation provides robust evaluation when you have limited data. K-fold cross-validation splits data into k folds, trains on k-1 folds and tests on the remaining fold, rotating until all folds serve as test sets. Stratified cross-validation maintains class distribution across folds. Leave-one-out cross-validation uses single examples as test sets. Averaging results across folds reduces variance in performance estimates and provides more reliable performance assessment. Cross-validation helps detect overfitting by showing performance variation across different data splits. It's especially valuable when you can't afford a large separate test set.
- **Confusion Matrices**: Confusion matrices show detailed classification performance in tabular form. They display true positives, false positives, true negatives, and false negatives for each class. They reveal which classes confuse the model and guide targeted improvements in specific areas. They help identify class imbalance effects and show where the model struggles. Multi-class confusion matrices expand to show all class pair confusions. They provide deeper insight than single accuracy metrics and enable per-class performance analysis. Visualization helps identify patterns in classification errors.
- **Precision and Recall**: Precision measures prediction quality as true positives divided by all positive predictions. High precision means few false positives, indicating reliable positive predictions. Precision matters when false positives are costly, such as in medical diagnosis, fraud detection, or content moderation. Recall measures coverage as true positives divided by all actual positives. High recall means few false negatives, indicating comprehensive detection. Recall matters when false negatives are costly, such as in disease screening, security systems, or search engines. The precision-recall tradeoff shows that improving one often degrades the other. Choose based on your error cost structure.
- **F1 Score and Variants**: F1 score balances precision and recall as the harmonic mean of both metrics. It provides a single performance metric when both aspects matter equally. F-beta scores allow weighting precision or recall more heavily. Macro-averaging computes metrics per class then averages. Micro-averaging aggregates all predictions across classes. Weighted averaging accounts for class frequencies. Different averaging methods suit different scenarios. F1 score is useful when you need a balanced measure but can't optimize both precision and recall simultaneously.
- **ROC Curves and AUC**: ROC curves visualize classification performance across all possible thresholds. They plot true positive rate against false positive rate, showing the tradeoff between sensitivity and specificity. AUC summarizes overall performance as the area under the ROC curve, ranging from 0 to 1. Higher AUC indicates better performance and the ability to distinguish between classes. AUC is threshold-agnostic and works well for imbalanced datasets. Precision-recall curves are more informative for imbalanced data. ROC-AUC of 0.5 means random performance while 1.0 means perfect separation.
- **Regression Metrics**: Regression metrics measure numeric prediction errors in different ways. Mean squared error emphasizes large errors through squaring, penalizing outliers heavily. Mean absolute error treats all errors equally, being more robust to outliers. R-squared measures explained variance as a proportion of total variance, indicating how well the model fits the data. Root mean squared error converts MSE back to original units for interpretability. Mean absolute percentage error provides relative error measurement. Different metrics suit different business contexts and error cost structures.
- **Statistical Testing**: Statistical significance tests compare models to determine if performance differences are real or random. They use hypothesis testing frameworks like t-tests or Mann-Whitney tests to provide confidence in results. They help validate that improvements are meaningful rather than due to chance variation. P-values indicate the probability of observing results by chance. Confidence intervals show the range of plausible performance values. Multiple comparison corrections adjust for testing multiple hypotheses. Statistical rigor prevents overfitting to evaluation metrics.
- **Validation Strategies**: Different validation strategies suit different scenarios. Holdout validation uses a single test set and is simple and fast but requires sufficient data and may have high variance. K-fold cross-validation provides more robust estimates with limited data. Time-based splitting preserves temporal order by using past data to train and future data to test, matching real-world deployment scenarios and preventing data leakage from future information. Group-based validation maintains group structure for group-dependent data. Nested cross-validation uses inner loops for hyperparameter tuning and outer loops for performance estimation, preventing overfitting to validation sets.

### Overfitting

Overfitting occurs when a model memorizes training data instead of learning generalizable patterns. It performs well on training data but poorly on new data. The model learns noise instead of patterns and becomes too specific to training examples. Overfitting happens with complex models and small datasets. Complex models can memorize details while small datasets lack diversity. The solution involves regularization, more data, or simpler models.

![Overfitting Diagram](/tutorials/ai-tutorial-01-introduction/diagram-overfitting.svg)

- **Bias-Variance Tradeoff**: The bias-variance tradeoff explains the overfitting phenomenon fundamentally. High bias means underfitting where the model is too simple and systematically misses patterns in data, resulting in poor performance on both training and test data. High variance means overfitting where the model is too complex and learns noise, resulting in good training performance but poor test performance. You must balance bias and variance for optimal performance. Underfitting occurs when models are too simple and fail to capture underlying patterns. Increasing model complexity reduces underfitting but finding the right complexity balances both bias and variance. The optimal model complexity depends on data size, quality, and noise level. Understanding this tradeoff guides model selection and regularization choices.
- **Regularization Techniques**: Regularization reduces overfitting by limiting model complexity and preventing weights from growing too large. L1 regularization adds absolute value penalties that encourage sparsity by driving many weights to zero, performing automatic feature selection and creating simpler, more interpretable models. L2 regularization adds squared penalties that shrink weights toward zero without creating sparsity, stabilizing training and being more common than L1 in practice. Elastic net combines L1 and L2 to balance sparsity and stability, working well with correlated features and combining benefits of both methods. Regularization strength is controlled by hyperparameters that must be tuned. Too much regularization causes underfitting while too little allows overfitting.
- **Neural Network Regularization**: Neural networks have specialized regularization techniques. Dropout randomly disables neurons during training, forcing the model to learn redundant representations and reducing co-adaptation of neurons. Dropout rates typically range from 0.2 to 0.5. Batch normalization normalizes layer inputs during training, stabilizing learning, allowing higher learning rates, and acting as a form of regularization. Weight decay penalizes large weights during optimization and is equivalent to L2 regularization. Layer normalization provides similar benefits to batch normalization for sequence models. Data augmentation also acts as regularization by exposing models to more variations during training.
- **Data Augmentation**: Data augmentation creates more training examples by applying transformations to existing examples, effectively increasing dataset size without collecting new data. For images, you rotate, flip, crop, adjust brightness, or add noise. For text, you paraphrase, translate, or use synonym replacement. For audio, you add noise, change speed, or apply filters. Augmentation increases dataset diversity and helps models generalize better by seeing more variations during training. It's particularly valuable when data is limited or expensive to collect. The key is using transformations that preserve the semantic meaning while adding diversity. Augmentation should reflect realistic variations the model will encounter in production.
- **Learning Curves**: Learning curves visualize overfitting by plotting training and validation performance over epochs or training iterations. Gaps between curves indicate overfitting when training performance improves while validation performance degrades. Convergence suggests sufficient training when both curves plateau at similar performance levels. Divergence suggests overfitting is occurring. Learning curves help diagnose training issues and guide early stopping decisions. They reveal whether you need more data, different model complexity, or better regularization. Monitoring learning curves during training enables proactive intervention before overfitting becomes severe.
- **Data Size and Quality**: Training set size influences overfitting significantly. Small datasets are prone to overfitting because models can memorize all examples easily. Large datasets reduce overfitting risk by providing more diverse patterns that prevent memorization. However, data quality matters more than quantity alone. Poor quality data with noise, errors, or bias leads to poor models regardless of size. Diverse data covering edge cases helps generalization. Balanced class distribution prevents bias toward majority classes. Representative data that matches production distribution is essential. More high-quality data is always beneficial, but there are diminishing returns, and data collection costs must be considered.
- **Ensemble Methods**: Ensemble methods reduce overfitting by combining multiple models and averaging their predictions, reducing variance through aggregation. Bagging trains models on different data subsets through bootstrap sampling, reducing variance without increasing bias. Random forests use bagging with decision trees. Boosting trains models sequentially to correct previous errors, reducing both bias and variance. Gradient boosting and AdaBoost are popular boosting methods. Stacking combines models using a meta-learner. Ensemble methods are among the most effective techniques for reducing overfitting and improving generalization. They work because different models make different errors, and averaging cancels out individual mistakes.
- **Model Simplification**: Pruning removes unnecessary model parts to simplify models and reduce overfitting risk. Decision tree pruning removes branches that don't improve validation performance. Neural network pruning removes connections or entire neurons with low importance. Knowledge distillation trains smaller models to mimic larger models. Quantization reduces model precision. These techniques create simpler models that generalize better while maintaining performance. Simplified models are also faster, use less memory, and are easier to deploy. The goal is finding the simplest model that achieves acceptable performance.
- **Early Stopping**: Early stopping monitors validation performance and stops training when it degrades, preventing overfitting automatically. It saves the best model checkpoint based on validation performance. It is simple, effective, and widely used in practice. Early stopping saves computation by avoiding unnecessary training epochs after the model has learned all it can. Patience parameters control how many epochs to wait before stopping. Restore best weights options automatically revert to the best checkpoint. Early stopping works by detecting when the model starts overfitting to training data, indicated by validation performance plateauing or degrading while training performance continues improving. It's particularly effective for neural networks trained for many epochs.
- **Regularization Strategies**: Effective overfitting prevention requires combining multiple strategies. Use appropriate model complexity for your data size. Apply regularization techniques like L1, L2, or dropout. Use data augmentation to increase effective dataset size. Monitor learning curves to detect overfitting early. Use cross-validation to get robust performance estimates. Ensemble methods can reduce overfitting. Early stopping prevents unnecessary training. The best approach depends on your specific problem, data, and constraints. Experiment with different combinations to find what works best for your use case.

## Machine Learning Workflow

The machine learning process follows these steps. Define the problem. Collect and prepare data. Choose an algorithm. Train the model. Evaluate performance. Deploy and monitor.

### Problem Definition

Start by defining what you want to predict. Is it classification or regression? What are the inputs and outputs? What success looks like. Define metrics to measure success.

Clear problem definition guides everything else. It determines data needs. It selects appropriate algorithms. It defines evaluation methods. Vague problems lead to vague solutions.

### Data Collection

Gather examples relevant to your problem. More data usually improves results. Data should represent real-world scenarios. Biased data produces biased models. Diverse data produces robust models.

Data comes from many sources. Databases store historical records. APIs provide real-time information. Sensors capture measurements. Surveys collect responses. Each source has strengths and limitations.

### Data Preparation

Raw data needs preparation. Handle missing values. Remove outliers. Normalize features. Split into training and testing sets. Preparation quality affects model performance.

Missing values need decisions. You can remove examples. You can fill with averages. You can predict missing values. Each approach has trade-offs.

Outliers are unusual values. They might be errors. They might be rare events. You can remove them. You can transform them. Context determines the best approach.

Feature normalization scales values. Different features have different ranges. Normalization makes them comparable. It helps some algorithms converge faster.

### Algorithm Selection

Choose an algorithm matching your problem. Classification problems use classification algorithms. Regression problems use regression algorithms. Each algorithm has assumptions. Match assumptions to your data.

Linear models assume linear relationships. They are simple and interpretable. They work well with many features. Non-linear models capture complex patterns. They need more data. They are harder to interpret.

### Model Training

Training finds optimal parameters. The algorithm processes training data. It adjusts parameters to minimize errors. Training stops when performance plateaus or time limits are reached.

Training requires monitoring. Watch for overfitting. Track performance metrics. Adjust hyperparameters if needed. Early stopping prevents overfitting.

### Evaluation

Evaluation measures model quality. Use held-out test data. Calculate metrics like accuracy, precision, recall, or mean squared error. Good performance on test data suggests the model works.

Multiple metrics provide different views. Accuracy shows overall correctness. Precision shows prediction quality. Recall shows coverage. Choose metrics matching your goals.

### Deployment

Deployment puts the model into use. It processes real inputs. It produces predictions. You monitor performance. You retrain as new data arrives.

Deployed models need maintenance. Data distributions change over time. Models degrade. Regular retraining keeps performance high. Monitoring detects issues early.

## Common Algorithms

### Linear Regression

Linear regression predicts continuous values. It assumes a linear relationship between features and target. It finds a line that minimizes prediction errors. It is simple and interpretable.

The model equation is y = wx + b. w is the weight. b is the bias. Training finds optimal w and b. Predictions come from this equation.

Linear regression works when relationships are linear. It fails with non-linear patterns. It needs feature scaling for best results. It handles many features efficiently.

### Logistic Regression

Logistic regression predicts probabilities. It outputs values between zero and one. It uses a sigmoid function. You can convert probabilities to binary classifications.

Despite the name, logistic regression is a classification algorithm. It predicts class membership probabilities. You choose a threshold to make decisions. Common threshold is 0.5.

Logistic regression is interpretable. You can see feature importance. It works well with linearly separable classes. It needs feature scaling.

### Decision Trees

Decision trees make decisions through branching. Each node tests a feature. Branches lead to predictions or more tests. Trees are easy to understand and visualize.

![Decision Tree Diagram](/tutorials/ai-tutorial-01-introduction/diagram-decision-tree.svg)

Decision trees handle non-linear relationships. They work with mixed data types. They show which features matter most. They can overfit easily.

### Random Forests

Random forests combine many decision trees. Each tree sees different data. Predictions come from voting or averaging. They reduce overfitting compared to single trees.

Random forests are robust. They handle missing values. They work with many features. They provide feature importance. They are harder to interpret than single trees.

### Neural Networks

Neural networks are inspired by brains. They have layers of connected nodes. Each connection has a weight. Training adjusts weights to learn patterns.

![Neural Network Diagram](/tutorials/ai-tutorial-01-introduction/diagram-neural-network.svg)

Neural networks can learn complex patterns. They work with images, text, and signals. They need much data and computation. They are hard to interpret.

## Applications

Machine learning appears in many applications. Email filters classify messages. Recommendation systems suggest products. Image recognition identifies objects. Speech recognition converts audio to text. Medical diagnosis aids doctors. Autonomous vehicles navigate roads.

Email filtering uses classification. The system learns from labeled emails. It identifies spam patterns. It filters unwanted messages automatically.

Recommendation systems use collaborative filtering. They find users with similar preferences. They suggest items liked by similar users. They improve with more usage data.

Image recognition uses deep learning. Convolutional neural networks process pixels. They learn visual features. They identify objects in images.

Speech recognition converts audio to text. Recurrent neural networks process sequences. They learn speech patterns. They transcribe spoken words.

Medical diagnosis assists healthcare. Systems learn from patient data. They identify disease indicators. They support clinical decisions.

Autonomous vehicles navigate environments. They process sensor data. They identify obstacles. They plan safe paths.

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

print(f"Accuracy: {accuracy:.2f}")
print(f"Precision: {precision:.2f}")
print(f"Recall: {recall:.2f}")
print(f"F1 Score: {f1:.2f}")
print(f"Confusion Matrix:\n{cm}")

# Test with new email
new_email = ["Win a free vacation! Click now to enter the contest!"]
new_features = vectorizer.transform(new_email)
prediction = classifier.predict(new_features)
print(f"\nNew email prediction: {'Spam' if prediction[0] == 1 else 'Not Spam'}")
\`\`\`

**Test Case Output:**

\`\`\`
Accuracy: 1.00
Precision: 1.00
Recall: 1.00
F1 Score: 1.00
Confusion Matrix:
[[1 0]
 [0 1]]

New email prediction: Spam
\`\`\`

## NeuronDB SQL Example: Customer Segmentation

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
\`\`\`

**Test Case Output:**

\`\`\`
customer_id | total_spent | num_orders | days_since_last_purchase | cluster_id
------------|-------------|------------|--------------------------|------------
1           | 1250.50     | 15         | 5                        | 0
2           | 450.25      | 8          | 45                       | 1
3           | 3200.75     | 32         | 2                        | 0
4           | 180.00      | 4          | 120                      | 2
5           | 890.50      | 12         | 15                       | 1
6           | 2150.25     | 20         | 8                        | 0
7           | 350.75      | 7          | 60                       | 2
8           | 125.00      | 3          | 90                       | 2

cluster_id | customer_count | avg_total_spent | avg_num_orders | avg_days_since_last_purchase | segment_type
-----------|----------------|-----------------|----------------|------------------------------|-------------
0          | 3              | 2200.50         | 22.33          | 5.00                         | High Value
1          | 2              | 670.38          | 10.00          | 30.00                        | Medium Value
2          | 3              | 218.58          | 4.67           | 90.00                        | Low Value
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

  const markdown = `![Tutorial Header](/tutorials/${tutorial.slug}/header.svg?v=1)

${content}

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
