
export const questions = [
    
    {
    id:1,
    question: "What are the key differences between Amazon S3 and Amazon EBS?",
    answer : "Amazon S3 is object storage for files, while Amazon EBS provides block storage for EC2 instances. S3 is scalable and globally accessible, while EBS is attached to a single EC2 instance."
    },
    {
    id:2,
    question: " Explain the AWS Well-Architected Framework and its significance.",
    answer : "The AWS Well-Architected Framework is a set of best practices for designing secure, high-performing, resilient, and efficient infrastructure for applications. It helps customers build well-architected solutions that reduce risk and improve the quality of their workloads."
    },
    {
    id:3,
    question: "What is the purpose of an AWS VPC and how does it work?",
    answer : "AWS Virtual Private Cloud (VPC) is a private network in the AWS cloud. It allows you to isolate resources, control network traffic, and connect to on-premises data centers securely. VPCs are crucial for building secure and scalable architectures."
    },
    {
    id:4,
    question: "What is AWS CloudFormation, and how can it simplify infrastructure management?",
    answer : "AWS CloudFormation is an infrastructure-as-code service that enables you to create, update, and delete AWS resources in a controlled and predictable manner. It automates resource provisioning and management, improving infrastructure consistency and scalability."
    },
    {
    id:5,
    question: "How does AWS Auto Scaling help ensure application availability and cost efficiency?",
    answer : "AWS Auto Scaling automatically adjusts the number of EC2 instances to maintain desired application performance. It ensures availability by scaling out during traffic spikes and reduces costs by scaling in during periods of lower demand."
    },
    {
    id:6,
    question: "Describe the difference between Amazon RDS and Amazon DynamoDB for database management.",
    answer : "Amazon RDS is a managed relational database service, while Amazon DynamoDB is a NoSQL database service. RDS supports multiple database engines, while DynamoDB is designed for high-performance, scalable, and serverless applications."
    },
    {
    id:7,
    question: "What is AWS Identity and Access Management (IAM), and why is it essential for security?",
    answer : "AWS IAM is a service that controls access to AWS resources. It helps organizations manage users, groups, roles, and policies, ensuring only authorized users and applications have access to resources, enhancing security."
    },
    {
    id:8,
    question: "Explain the benefits of AWS Elastic Beanstalk in application deployment.",
    answer : " AWS Elastic Beanstalk is a Platform as a Service (PaaS) that simplifies application deployment and management. It automatically handles infrastructure provisioning, load balancing, scaling, and monitoring, allowing developers to focus on writing code and increasing development speed and efficiency."
    },
    {
    id:9,
    question: "What is AWS CloudWatch, and how does it support monitoring and troubleshooting in AWS environments?",
    answer : " AWS CloudWatch is a monitoring and observability service that collects and analyzes data from various AWS resources and applications. It provides insights into system performance, resource utilization, and application health, facilitating proactive troubleshooting and optimization of AWS resources."
    },
    {
    id:10,
    question: "How does Amazon Web Services (AWS) handle data security and compliance, and what tools are available to help customers meet their security requirements?",
    answer : "AWS takes data security and compliance seriously. It provides a range of security services and features, including encryption, identity and access management, monitoring, and compliance certifications. AWS Artifact offers documentation and compliance reports, while AWS KMS provides robust encryption key management. AWS Config helps assess compliance, and AWS Identity and Access Management (IAM) allows fine-grained control over access permissions. AWS's Shared Responsibility Model outlines the division of security responsibilities between AWS and its customers, fostering a secure cloud environment."
    },
    {
    id:11,
    question: "What is AWS Lambda, and how does it work in serverless architecture?",
    answer : "AWS Lambda is a serverless compute service that runs code in response to events. It automatically scales, manages resources, and charges only for usage, making it cost-effective for running small, event-driven applications."
    }
]