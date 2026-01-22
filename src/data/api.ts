import {
    Code,
    TerminalWindow,
    GitBranch,
    Database
} from '@phosphor-icons/react';

export interface APIParameter {
    name: string;
    type: string;
    required: boolean;
    description: string;
}

export interface APIEndpoint {
    method: string;
    path: string;
    description: string;
    parameters: APIParameter[];
    example: string;
}

export const apiEndpoints: Record<string, APIEndpoint[]> = {
    lending: [
        {
            method: 'POST',
            path: '/api/v1/loans/apply',
            description: 'Submit a new loan application',
            parameters: [
                { name: 'customer_id', type: 'string', required: true, description: 'Unique customer identifier' },
                { name: 'amount', type: 'number', required: true, description: 'Loan amount requested' },
                { name: 'term', type: 'number', required: true, description: 'Loan term in months' },
                { name: 'purpose', type: 'string', required: false, description: 'Loan purpose description' }
            ],
            example: `curl -X POST https://api.figbud.com/api/v1/loans/apply \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "customer_id": "cust_123456",
    "amount": 50000,
    "term": 12,
    "purpose": "Business expansion"
  }'`
        },
        {
            method: 'GET',
            path: '/api/v1/loans/{loan_id}',
            description: 'Retrieve loan application status',
            parameters: [
                { name: 'loan_id', type: 'string', required: true, description: 'Unique loan identifier' }
            ],
            example: `curl -X GET https://api.figbud.com/api/v1/loans/loan_789012 \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        },
        {
            method: 'POST',
            path: '/api/v1/loans/{loan_id}/disburse',
            description: 'Disburse approved loan to customer',
            parameters: [
                { name: 'loan_id', type: 'string', required: true, description: 'Unique loan identifier' },
                { name: 'disbursement_method', type: 'string', required: true, description: 'Pesalink, M-Pesa, or Bank Transfer' },
                { name: 'account_details', type: 'object', required: true, description: 'Recipient account information' }
            ],
            example: `curl -X POST https://api.figbud.com/api/v1/loans/loan_789012/disburse \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "disbursement_method": "pesalink",
    "account_details": {
      "account_number": "1234567890",
      "bank_code": "01"
    }
  }'`
        }
    ],
    payments: [
        {
            method: 'POST',
            path: '/api/v1/payments/initiate',
            description: 'Initiate a payment transaction',
            parameters: [
                { name: 'amount', type: 'number', required: true, description: 'Payment amount' },
                { name: 'currency', type: 'string', required: true, description: 'KES, USD, etc.' },
                { name: 'recipient', type: 'string', required: true, description: 'Recipient identifier' },
                { name: 'method', type: 'string', required: true, description: 'pesalink, mpesa, bank_transfer' }
            ],
            example: `curl -X POST https://api.figbud.com/api/v1/payments/initiate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 15000.50,
    "currency": "KES",
    "recipient": "254712345678",
    "method": "mpesa",
    "description": "Invoice payment #123"
  }'`
        },
        {
            method: 'GET',
            path: '/api/v1/payments/{payment_id}',
            description: 'Retrieve payment status',
            parameters: [
                { name: 'payment_id', type: 'string', required: true, description: 'Unique payment identifier' }
            ],
            example: `curl -X GET https://api.figbud.com/api/v1/payments/pay_987654 \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
    ],
    hrm: [
        {
            method: 'POST',
            path: '/api/v1/employees',
            description: 'Create new employee record',
            parameters: [
                { name: 'employee_id', type: 'string', required: true, description: 'Unique employee identifier' },
                { name: 'personal_info', type: 'object', required: true, description: 'Employee personal details' },
                { name: 'employment_details', type: 'object', required: true, description: 'Employment information' }
            ],
            example: `curl -X POST https://api.figbud.com/api/v1/employees \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "employee_id": "emp_001",
    "personal_info": {
      "first_name": "John",
      "last_name": "Doe",
      "id_number": "12345678",
      "email": "john.doe@company.com"
    },
    "employment_details": {
      "department": "Engineering",
      "position": "Software Developer",
      "salary": 150000,
      "start_date": "2024-01-15"
    }
  }'`
        },
        {
            method: 'POST',
            path: '/api/v1/payroll/process',
            description: 'Process payroll for employees',
            parameters: [
                { name: 'payroll_period', type: 'string', required: true, description: 'YYYY-MM payroll period' },
                { name: 'employee_ids', type: 'array', required: false, description: 'Specific employees to process' }
            ],
            example: `curl -X POST https://api.figbud.com/api/v1/payroll/process \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "payroll_period": "2024-03",
    "employee_ids": ["emp_001", "emp_002"]
  }'`
        }
    ]
};

export const sdks = [
    {
        name: 'JavaScript/Node.js',
        icon: Code,
        version: '2.1.0',
        installation: 'npm install figbud-sdk',
        features: ['TypeScript support', 'Async/await', 'Error handling', 'Webhook verification'],
        code: `const figbud = require('figbud-sdk');

const client = new figbud.Client({
  apiKey: process.env.FIGBUD_API_KEY,
  environment: 'production'
});

// Example: Process loan application
const loan = await client.loans.apply({
  customerId: 'cust_123',
  amount: 50000,
  term: 12
});`
    },
    {
        name: 'Python',
        icon: TerminalWindow,
        version: '1.4.2',
        installation: 'pip install figbud-sdk',
        features: ['Python 3.7+', 'Request support', 'Type hinting', 'Native exceptions'],
        code: `from figbud import Client

client = Client(
    api_key='YOUR_API_KEY',
    environment='production'
)

# Example: Process loan application
loan = client.loans.apply(
    customer_id='cust_123',
    amount=50000,
    term=12
)`
    },
    {
        name: 'PHP',
        icon: GitBranch,
        version: '1.0.5',
        installation: 'composer require figbud/sdk',
        features: ['PSR compliance', 'Laravel support', 'Guzzle integration', 'Clean API'],
        code: `use Figbud\\Client;

$client = new Client([
    'api_key' => 'YOUR_API_KEY',
    'environment' => 'production'
]);

// Example: Process loan application
$loan = $client->loans->apply([
    'customer_id' => 'cust_123',
    'amount' => 50000,
    'term' => 12
]);`
    },
    {
        name: 'Database SQL',
        icon: Database,
        version: 'Direct Access',
        installation: 'N/A',
        features: ['Read-only mirrors', 'Real-time sync', 'Standard SQL', 'SSL encryption'],
        code: `SELECT 
    l.loan_id,
    l.amount,
    c.name as customer_name,
    l.status
FROM loans l
JOIN customers c ON l.customer_id = c.id
WHERE l.status = 'approved';`
    }
];

export const authentication = {
    description: 'The Figbud API uses API keys to authenticate requests. You can view and manage your API keys in the Figbud Dashboard. Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.',
    steps: [
        'Obtain your API key from the Figbud Dashboard',
        'Include the key in the Authorization header of your requests',
        'Use the "Bearer" authentication scheme'
    ],
    example: 'Authorization: Bearer YOUR_API_KEY'
};

export const webhooks = [
    {
        event: 'loan.application.created',
        description: 'Triggered when a new loan application is submitted',
        payload: `{
  "id": "evt_123",
  "type": "loan.application.created",
  "created": 123456789,
  "data": {
    "loan_id": "loan_789",
    "customer_id": "cust_456"
  }
}`
    },
    {
        event: 'loan.disbursement.success',
        description: 'Triggered when a loan has been successfully disbursed',
        payload: `{
  "id": "evt_124",
  "type": "loan.disbursement.success",
  "created": 123456790,
  "data": {
    "loan_id": "loan_789",
    "amount": 50000,
    "method": "pesalink"
  }
}`
    },
    {
        event: 'payment.received',
        description: 'Triggered when a payment transaction is completed',
        payload: `{
  "id": "evt_125",
  "type": "payment.received",
  "created": 123456791,
  "data": {
    "payment_id": "pay_987",
    "amount": 15000.50,
    "status": "completed"
  }
}`
    }
];

export const errorCodes = [
    { code: '400', message: 'Bad Request', description: 'The request was unacceptable, often due to missing a required parameter.' },
    { code: '401', message: 'Unauthorized', description: 'No valid API key provided.' },
    { code: '402', message: 'Request Failed', description: 'The parameters were valid but the request failed.' },
    { code: '403', message: 'Forbidden', description: 'The API key doesn\'t have permissions to perform the request.' },
    { code: '404', message: 'Not Found', description: 'The requested resource doesn\'t exist.' },
    { code: '429', message: 'Too Many Requests', description: 'Too many requests hit the API too quickly.' },
    { code: '500, 502, 503, 504', message: 'Server Errors', description: 'Something went wrong on Figbud\'s end.' }
];
