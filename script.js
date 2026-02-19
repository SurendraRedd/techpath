// Technology Modal Content
const techContent = {
    aws: {
        title: "Amazon Web Services (AWS)",
        content: `
            <h2><i class="fab fa-aws"></i> Amazon Web Services (AWS)</h2>
            <p class="modal-intro">AWS lets you rent computers and storage over the internet instead of buying your own. It's like renting an apartment instead of buying a house - you pay only for what you use.</p>
            
            <div class="modal-section">
                <h3><i class="fas fa-bullseye"></i> Critical Services</h3>
                <div class="services-grid">
                    <div class="service-category">
                        <h4><i class="fas fa-server"></i> Compute</h4>
                        <ul>
                            <li><strong>EC2</strong> - Virtual servers</li>
                            <li><strong>Lambda</strong> - Serverless functions</li>
                            <li><strong>ECS/EKS</strong> - Container services</li>
                            <li><strong>Fargate</strong> - Serverless containers</li>
                        </ul>
                    </div>
                    <div class="service-category">
                        <h4><i class="fas fa-database"></i> Storage</h4>
                        <ul>
                            <li><strong>S3</strong> - Object storage</li>
                            <li><strong>EBS</strong> - Block storage</li>
                            <li><strong>EFS</strong> - File storage</li>
                            <li><strong>Glacier</strong> - Archive storage</li>
                        </ul>
                    </div>
                    <div class="service-category">
                        <h4><i class="fas fa-table"></i> Database</h4>
                        <ul>
                            <li><strong>RDS</strong> - Managed SQL</li>
                            <li><strong>DynamoDB</strong> - NoSQL</li>
                            <li><strong>ElastiCache</strong> - In-memory cache</li>
                            <li><strong>Redshift</strong> - Data warehouse</li>
                        </ul>
                    </div>
                    <div class="service-category">
                        <h4><i class="fas fa-network-wired"></i> Networking</h4>
                        <ul>
                            <li><strong>VPC</strong> - Virtual network</li>
                            <li><strong>CloudFront</strong> - CDN</li>
                            <li><strong>Route 53</strong> - DNS</li>
                            <li><strong>API Gateway</strong> - API management</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-sitemap"></i> 3-Tier Web Architecture</h3>
                <div class="architecture-diagram">
                    <div class="arch-layer"><div class="arch-label">Users</div><div class="arch-box user-box"><i class="fas fa-users"></i> Internet Users</div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Edge & DNS</div><div class="arch-row"><div class="arch-box aws-orange">Route 53</div><div class="arch-box aws-orange">CloudFront</div></div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Load Balancer</div><div class="arch-box aws-orange">Application Load Balancer</div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Web Tier (Public Subnet)</div><div class="arch-row"><div class="arch-box aws-compute">EC2</div><div class="arch-box aws-compute">EC2</div><div class="arch-box aws-compute">EC2</div></div><div class="arch-note">Auto Scaling Group</div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">App Tier (Private Subnet)</div><div class="arch-row"><div class="arch-box aws-compute">ECS/EKS</div><div class="arch-box aws-lambda">Lambda</div></div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Data Tier (Private Subnet)</div><div class="arch-row"><div class="arch-box aws-db">RDS Primary</div><div class="arch-box aws-db">RDS Replica</div><div class="arch-box aws-cache">ElastiCache</div></div></div>
                    <div class="arch-layer"><div class="arch-label">Storage</div><div class="arch-row"><div class="arch-box aws-storage">S3 Bucket</div></div></div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-graduation-cap"></i> Learning Path</h3>
                <div class="learning-path">
                    <div class="path-step"><span class="step-num">1</span><span>Start with AWS Cloud Practitioner certification</span></div>
                    <div class="path-step"><span class="step-num">2</span><span>Learn core services: EC2, S3, VPC, IAM</span></div>
                    <div class="path-step"><span class="step-num">3</span><span>Practice with AWS Free Tier</span></div>
                    <div class="path-step"><span class="step-num">4</span><span>Get Solutions Architect Associate cert</span></div>
                </div>
            </div>
        `
    },
    azure: {
        title: "Microsoft Azure",
        content: `
            <h2><i class="fab fa-microsoft"></i> Microsoft Azure</h2>
            <p class="modal-intro">Azure is Microsoft's cloud service. If you use Windows or Office, Azure works great with them. It's like AWS but made by Microsoft.</p>
            
            <div class="modal-section">
                <h3><i class="fas fa-bullseye"></i> Critical Services</h3>
                <div class="services-grid">
                    <div class="service-category">
                        <h4><i class="fas fa-server"></i> Compute</h4>
                        <ul>
                            <li><strong>Virtual Machines</strong> - IaaS compute</li>
                            <li><strong>App Service</strong> - PaaS web apps</li>
                            <li><strong>Azure Functions</strong> - Serverless</li>
                            <li><strong>AKS</strong> - Managed Kubernetes</li>
                        </ul>
                    </div>
                    <div class="service-category">
                        <h4><i class="fas fa-database"></i> Storage</h4>
                        <ul>
                            <li><strong>Blob Storage</strong> - Object storage</li>
                            <li><strong>Managed Disks</strong> - Block storage</li>
                            <li><strong>Azure Files</strong> - File shares</li>
                            <li><strong>Archive Storage</strong> - Cold storage</li>
                        </ul>
                    </div>
                    <div class="service-category">
                        <h4><i class="fas fa-table"></i> Database</h4>
                        <ul>
                            <li><strong>Azure SQL</strong> - Managed SQL Server</li>
                            <li><strong>Cosmos DB</strong> - Multi-model NoSQL</li>
                            <li><strong>Azure Cache</strong> - Redis cache</li>
                            <li><strong>Synapse</strong> - Analytics</li>
                        </ul>
                    </div>
                    <div class="service-category">
                        <h4><i class="fas fa-shield-alt"></i> Identity & Security</h4>
                        <ul>
                            <li><strong>Azure AD</strong> - Identity management</li>
                            <li><strong>Key Vault</strong> - Secrets management</li>
                            <li><strong>Security Center</strong> - Security posture</li>
                            <li><strong>Sentinel</strong> - SIEM solution</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-sitemap"></i> Microservices Architecture</h3>
                <div class="architecture-diagram">
                    <div class="arch-layer"><div class="arch-label">Client Apps</div><div class="arch-row"><div class="arch-box user-box"><i class="fas fa-mobile-alt"></i> Mobile</div><div class="arch-box user-box"><i class="fas fa-laptop"></i> Web</div><div class="arch-box user-box"><i class="fas fa-cog"></i> IoT</div></div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Gateway & Security</div><div class="arch-row"><div class="arch-box azure-blue">Azure Front Door</div><div class="arch-box azure-blue">API Management</div></div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Identity</div><div class="arch-box azure-security">Azure Active Directory</div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Microservices (AKS Cluster)</div><div class="arch-row"><div class="arch-box azure-compute"><i class="fas fa-cube"></i> Service A</div><div class="arch-box azure-compute"><i class="fas fa-cube"></i> Service B</div><div class="arch-box azure-compute"><i class="fas fa-cube"></i> Service C</div></div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Messaging</div><div class="arch-row"><div class="arch-box azure-msg">Service Bus</div><div class="arch-box azure-msg">Event Grid</div></div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Data Layer</div><div class="arch-row"><div class="arch-box azure-db">Azure SQL</div><div class="arch-box azure-db">Cosmos DB</div><div class="arch-box azure-storage">Blob Storage</div></div></div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-graduation-cap"></i> Learning Path</h3>
                <div class="learning-path">
                    <div class="path-step"><span class="step-num">1</span><span>Start with AZ-900 Azure Fundamentals</span></div>
                    <div class="path-step"><span class="step-num">2</span><span>Learn core services: VMs, Storage, VNet</span></div>
                    <div class="path-step"><span class="step-num">3</span><span>Use Microsoft Learn (free)</span></div>
                    <div class="path-step"><span class="step-num">4</span><span>Get AZ-104 Administrator cert</span></div>
                </div>
            </div>
        `
    },
    gcp: {
        title: "Google Cloud Platform",
        content: `
            <h2><i class="fab fa-google"></i> Google Cloud Platform (GCP)</h2>
            <p class="modal-intro">GCP is Google's cloud service. It uses the same technology that powers Google Search and YouTube. Great for data analysis and machine learning projects.</p>
            
            <div class="modal-section">
                <h3><i class="fas fa-bullseye"></i> Critical Services</h3>
                <div class="services-grid">
                    <div class="service-category">
                        <h4><i class="fas fa-server"></i> Compute</h4>
                        <ul>
                            <li><strong>Compute Engine</strong> - Virtual machines</li>
                            <li><strong>Cloud Run</strong> - Serverless containers</li>
                            <li><strong>Cloud Functions</strong> - Serverless</li>
                            <li><strong>GKE</strong> - Managed Kubernetes</li>
                        </ul>
                    </div>
                    <div class="service-category">
                        <h4><i class="fas fa-database"></i> Storage</h4>
                        <ul>
                            <li><strong>Cloud Storage</strong> - Object storage</li>
                            <li><strong>Persistent Disk</strong> - Block storage</li>
                            <li><strong>Filestore</strong> - File storage</li>
                            <li><strong>Archive Storage</strong> - Cold storage</li>
                        </ul>
                    </div>
                    <div class="service-category">
                        <h4><i class="fas fa-table"></i> Database</h4>
                        <ul>
                            <li><strong>Cloud SQL</strong> - Managed SQL</li>
                            <li><strong>Firestore</strong> - NoSQL document</li>
                            <li><strong>Bigtable</strong> - Wide-column NoSQL</li>
                            <li><strong>Spanner</strong> - Global SQL</li>
                        </ul>
                    </div>
                    <div class="service-category">
                        <h4><i class="fas fa-brain"></i> AI/ML & Analytics</h4>
                        <ul>
                            <li><strong>BigQuery</strong> - Data warehouse</li>
                            <li><strong>Vertex AI</strong> - ML platform</li>
                            <li><strong>Dataflow</strong> - Stream processing</li>
                            <li><strong>Pub/Sub</strong> - Messaging</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-sitemap"></i> Data Analytics Pipeline</h3>
                <div class="architecture-diagram">
                    <div class="arch-layer"><div class="arch-label">Data Sources</div><div class="arch-row"><div class="arch-box user-box"><i class="fas fa-chart-bar"></i> Apps</div><div class="arch-box user-box"><i class="fas fa-globe"></i> Web</div><div class="arch-box user-box"><i class="fas fa-mobile-alt"></i> Mobile</div><div class="arch-box user-box"><i class="fas fa-cog"></i> IoT</div></div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Ingestion</div><div class="arch-row"><div class="arch-box gcp-red">Pub/Sub</div><div class="arch-box gcp-red">Cloud IoT Core</div></div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Processing</div><div class="arch-row"><div class="arch-box gcp-blue">Dataflow</div><div class="arch-box gcp-blue">Dataproc</div></div><div class="arch-note">Stream & Batch Processing</div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Storage & Warehouse</div><div class="arch-row"><div class="arch-box gcp-storage">Cloud Storage</div><div class="arch-box gcp-analytics">BigQuery</div></div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Analytics & ML</div><div class="arch-row"><div class="arch-box gcp-ml">Vertex AI</div><div class="arch-box gcp-ml">Looker</div></div></div>
                    <div class="arch-arrow">↓</div>
                    <div class="arch-layer"><div class="arch-label">Visualization</div><div class="arch-row"><div class="arch-box gcp-viz"><i class="fas fa-chart-pie"></i> Dashboards</div><div class="arch-box gcp-viz"><i class="fas fa-file-alt"></i> Reports</div></div></div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-graduation-cap"></i> Learning Path</h3>
                <div class="learning-path">
                    <div class="path-step"><span class="step-num">1</span><span>Start with Cloud Digital Leader cert</span></div>
                    <div class="path-step"><span class="step-num">2</span><span>Learn core services: Compute Engine, GCS, VPC</span></div>
                    <div class="path-step"><span class="step-num">3</span><span>Use Google Cloud Skills Boost (free labs)</span></div>
                    <div class="path-step"><span class="step-num">4</span><span>Get Associate Cloud Engineer cert</span></div>
                </div>
            </div>
        `
    },
    docker: {
        title: "Docker",
        content: `
            <h2><i class="fab fa-docker"></i> Docker</h2>
            <p class="modal-intro">Docker is like a shipping container for software. It packages your app with everything it needs to run, so it works the same way on any computer.</p>
            
            <div class="modal-section">
                <h3><i class="fas fa-question-circle"></i> Why Docker?</h3>
                <div class="benefits-grid">
                    <div class="benefit"><i class="fas fa-check-circle"></i><strong>Consistency</strong><p>"Works on my machine" → "works everywhere"</p></div>
                    <div class="benefit"><i class="fas fa-shield-alt"></i><strong>Isolation</strong><p>Applications run in isolated environments</p></div>
                    <div class="benefit"><i class="fas fa-shipping-fast"></i><strong>Portability</strong><p>Run on laptop, server, or any cloud</p></div>
                    <div class="benefit"><i class="fas fa-bolt"></i><strong>Efficiency</strong><p>Share OS kernel, use fewer resources than VMs</p></div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-puzzle-piece"></i> Key Concepts</h3>
                <div class="concepts-list">
                    <div class="concept"><strong>Dockerfile</strong> - Text file with instructions to build an image</div>
                    <div class="concept"><strong>Image</strong> - Read-only template for creating containers</div>
                    <div class="concept"><strong>Container</strong> - Running instance of an image</div>
                    <div class="concept"><strong>Docker Hub</strong> - Public registry for sharing images</div>
                    <div class="concept"><strong>Volume</strong> - Persistent data storage for containers</div>
                    <div class="concept"><strong>Network</strong> - Communication between containers</div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-code"></i> Essential Commands</h3>
                <div class="commands-section">
                    <pre><code># Build an image
docker build -t myapp:v1 .

# Run a container
docker run -d -p 8080:80 --name web myapp:v1

# List containers
docker ps -a

# View logs
docker logs -f web

# Execute command in container
docker exec -it web sh

# Stop and remove
docker stop web && docker rm web</code></pre>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-graduation-cap"></i> Learning Path</h3>
                <div class="learning-path">
                    <div class="path-step"><span class="step-num">1</span><span>Install Docker Desktop</span></div>
                    <div class="path-step"><span class="step-num">2</span><span>Learn Dockerfile basics</span></div>
                    <div class="path-step"><span class="step-num">3</span><span>Practice with Docker Compose</span></div>
                    <div class="path-step"><span class="step-num">4</span><span>Learn multi-stage builds & optimization</span></div>
                </div>
            </div>
        `
    },
    kubernetes: {
        title: "Kubernetes",
        content: `
            <h2><i class="fas fa-dharmachakra"></i> Kubernetes (K8s)</h2>
            <p class="modal-intro">Kubernetes manages Docker containers at scale. Think of it as an orchestra conductor - it makes sure all your containers work together smoothly.</p>
            
            <div class="modal-section">
                <h3><i class="fas fa-question-circle"></i> Why Kubernetes?</h3>
                <div class="benefits-grid">
                    <div class="benefit"><i class="fas fa-expand-arrows-alt"></i><strong>Auto-scaling</strong><p>Scale apps based on demand automatically</p></div>
                    <div class="benefit"><i class="fas fa-heartbeat"></i><strong>Self-healing</strong><p>Restart failed containers, replace nodes</p></div>
                    <div class="benefit"><i class="fas fa-balance-scale"></i><strong>Load Balancing</strong><p>Distribute traffic across containers</p></div>
                    <div class="benefit"><i class="fas fa-sync"></i><strong>Rolling Updates</strong><p>Update apps with zero downtime</p></div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-puzzle-piece"></i> Key Components</h3>
                <div class="concepts-list">
                    <div class="concept"><strong>Pod</strong> - Smallest deployable unit, one or more containers</div>
                    <div class="concept"><strong>Deployment</strong> - Manages replica sets and rolling updates</div>
                    <div class="concept"><strong>Service</strong> - Exposes pods to network traffic</div>
                    <div class="concept"><strong>ConfigMap/Secret</strong> - Store configuration and sensitive data</div>
                    <div class="concept"><strong>Ingress</strong> - Manages external access to services</div>
                    <div class="concept"><strong>Namespace</strong> - Virtual clusters for resource isolation</div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-code"></i> Essential Commands</h3>
                <div class="commands-section">
                    <pre><code># Get resources
kubectl get pods,svc,deploy -n namespace

# Apply configuration
kubectl apply -f deployment.yaml

# Describe resource
kubectl describe pod my-pod

# View logs
kubectl logs -f my-pod

# Execute in pod
kubectl exec -it my-pod -- /bin/sh

# Scale deployment
kubectl scale deploy my-app --replicas=5</code></pre>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-graduation-cap"></i> Learning Path</h3>
                <div class="learning-path">
                    <div class="path-step"><span class="step-num">1</span><span>Master Docker first</span></div>
                    <div class="path-step"><span class="step-num">2</span><span>Set up Minikube or Kind locally</span></div>
                    <div class="path-step"><span class="step-num">3</span><span>Learn Pods, Deployments, Services</span></div>
                    <div class="path-step"><span class="step-num">4</span><span>Get CKA/CKAD certification</span></div>
                </div>
            </div>
        `
    },
    terraform: {
        title: "Terraform",
        content: `
            <h2><i class="fas fa-cube"></i> Terraform</h2>
            <p class="modal-intro">Terraform lets you write code to create cloud resources. Instead of clicking buttons in a website, you write a file that describes what you want, and Terraform builds it for you.</p>
            
            <div class="modal-section">
                <h3><i class="fas fa-question-circle"></i> Why Terraform?</h3>
                <div class="benefits-grid">
                    <div class="benefit"><i class="fas fa-cloud"></i><strong>Multi-cloud</strong><p>Works with AWS, Azure, GCP, and 1000+ providers</p></div>
                    <div class="benefit"><i class="fas fa-file-code"></i><strong>Declarative</strong><p>Define what you want, not how to create it</p></div>
                    <div class="benefit"><i class="fas fa-database"></i><strong>State Management</strong><p>Tracks resource state for updates</p></div>
                    <div class="benefit"><i class="fas fa-search"></i><strong>Plan & Preview</strong><p>See changes before applying</p></div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-puzzle-piece"></i> Key Concepts</h3>
                <div class="concepts-list">
                    <div class="concept"><strong>Provider</strong> - Plugin for interacting with APIs (AWS, Azure, etc.)</div>
                    <div class="concept"><strong>Resource</strong> - Infrastructure component to create</div>
                    <div class="concept"><strong>Module</strong> - Reusable configuration package</div>
                    <div class="concept"><strong>State</strong> - JSON file tracking managed infrastructure</div>
                    <div class="concept"><strong>Variables</strong> - Input parameters for configuration</div>
                    <div class="concept"><strong>Output</strong> - Values exported from configuration</div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-code"></i> Example & Commands</h3>
                <div class="commands-section">
                    <pre><code># main.tf
provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "web-server"
  }
}

# Commands
terraform init      # Initialize
terraform plan      # Preview changes
terraform apply     # Create resources
terraform destroy   # Delete resources</code></pre>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-graduation-cap"></i> Learning Path</h3>
                <div class="learning-path">
                    <div class="path-step"><span class="step-num">1</span><span>Learn HCL syntax basics</span></div>
                    <div class="path-step"><span class="step-num">2</span><span>Practice with simple AWS/Azure resources</span></div>
                    <div class="path-step"><span class="step-num">3</span><span>Learn modules and state management</span></div>
                    <div class="path-step"><span class="step-num">4</span><span>Get HashiCorp Terraform Associate cert</span></div>
                </div>
            </div>
        `
    },
    helm: {
        title: "Helm",
        content: `
            <h2><i class="fas fa-ship"></i> Helm</h2>
            <p class="modal-intro">Helm is like an app store for Kubernetes. Instead of setting up apps manually, you can install pre-made packages (called charts) with one command.</p>
            
            <div class="modal-section">
                <h3><i class="fas fa-question-circle"></i> Why Helm?</h3>
                <div class="benefits-grid">
                    <div class="benefit"><i class="fas fa-magic"></i><strong>Simplicity</strong><p>Install complex apps with one command</p></div>
                    <div class="benefit"><i class="fas fa-recycle"></i><strong>Reusability</strong><p>Share charts across teams and projects</p></div>
                    <div class="benefit"><i class="fas fa-history"></i><strong>Versioning</strong><p>Track and rollback releases</p></div>
                    <div class="benefit"><i class="fas fa-sliders-h"></i><strong>Templating</strong><p>Dynamic configuration with values</p></div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-puzzle-piece"></i> Key Concepts</h3>
                <div class="concepts-list">
                    <div class="concept"><strong>Chart</strong> - Package of Kubernetes resource definitions</div>
                    <div class="concept"><strong>Release</strong> - Instance of a chart running in cluster</div>
                    <div class="concept"><strong>Repository</strong> - Collection of charts (like Docker Hub)</div>
                    <div class="concept"><strong>Values</strong> - Configuration to customize charts</div>
                    <div class="concept"><strong>Templates</strong> - Kubernetes manifests with Go templating</div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-code"></i> Essential Commands</h3>
                <div class="commands-section">
                    <pre><code># Add a repository
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Search for charts
helm search repo nginx

# Install a chart
helm install my-nginx bitnami/nginx

# List releases
helm list

# Upgrade a release
helm upgrade my-nginx bitnami/nginx -f values.yaml

# Rollback
helm rollback my-nginx 1

# Uninstall
helm uninstall my-nginx</code></pre>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-graduation-cap"></i> Learning Path</h3>
                <div class="learning-path">
                    <div class="path-step"><span class="step-num">1</span><span>Master Kubernetes basics first</span></div>
                    <div class="path-step"><span class="step-num">2</span><span>Install charts from public repos</span></div>
                    <div class="path-step"><span class="step-num">3</span><span>Learn to customize with values</span></div>
                    <div class="path-step"><span class="step-num">4</span><span>Create your own charts</span></div>
                </div>
            </div>
        `
    },
    pulumi: {
        title: "Pulumi",
        content: `
            <h2><i class="fas fa-rocket"></i> Pulumi</h2>
            <p class="modal-intro">Pulumi is like Terraform, but you use regular programming languages (Python, JavaScript, etc.) instead of learning a new one. Great if you already know how to code.</p>
            
            <div class="modal-section">
                <h3><i class="fas fa-question-circle"></i> Why Pulumi?</h3>
                <div class="benefits-grid">
                    <div class="benefit"><i class="fas fa-code"></i><strong>Real Languages</strong><p>Use Python, TypeScript, Go, C#, Java</p></div>
                    <div class="benefit"><i class="fas fa-laptop-code"></i><strong>IDE Support</strong><p>Autocomplete, type checking, refactoring</p></div>
                    <div class="benefit"><i class="fas fa-recycle"></i><strong>Reusability</strong><p>Use loops, functions, classes</p></div>
                    <div class="benefit"><i class="fas fa-vial"></i><strong>Testing</strong><p>Unit test your infrastructure code</p></div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-puzzle-piece"></i> Key Concepts</h3>
                <div class="concepts-list">
                    <div class="concept"><strong>Project</strong> - Directory containing Pulumi program</div>
                    <div class="concept"><strong>Stack</strong> - Isolated instance (dev, staging, prod)</div>
                    <div class="concept"><strong>Resource</strong> - Cloud component to manage</div>
                    <div class="concept"><strong>Output</strong> - Values exported from stack</div>
                    <div class="concept"><strong>Provider</strong> - Cloud/service to provision resources</div>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-code"></i> Example (Python)</h3>
                <div class="commands-section">
                    <pre><code>import pulumi
import pulumi_aws as aws

# Create an S3 bucket
bucket = aws.s3.Bucket("my-bucket",
    website=aws.s3.BucketWebsiteArgs(
        index_document="index.html"
    ))

# Export the bucket URL
pulumi.export("bucket_url", bucket.website_endpoint)

# Commands
pulumi new aws-python   # Create project
pulumi preview          # Preview changes
pulumi up               # Deploy
pulumi destroy          # Remove</code></pre>
                </div>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-graduation-cap"></i> Learning Path</h3>
                <div class="learning-path">
                    <div class="path-step"><span class="step-num">1</span><span>Know one supported language well</span></div>
                    <div class="path-step"><span class="step-num">2</span><span>Install Pulumi CLI and set up account</span></div>
                    <div class="path-step"><span class="step-num">3</span><span>Deploy simple resources (S3, VMs)</span></div>
                    <div class="path-step"><span class="step-num">4</span><span>Learn component resources & testing</span></div>
                </div>
            </div>
        `
    }
};

// Modal Functions
function openModal(tech) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const content = techContent[tech];
    
    if (content) {
        modalBody.innerHTML = content.content;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Resource Tabs
function showResourceTab(tabId) {
    // Hide all content
    document.querySelectorAll('.resource-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected content
    document.getElementById(tabId).classList.add('active');
    
    // Add active to clicked button
    event.target.classList.add('active');
}

// Cheat Sheet Tabs
function showCheatSheet(sheetId) {
    // Hide all content
    document.querySelectorAll('.cheatsheet-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active from all buttons
    document.querySelectorAll('.cheat-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected content
    document.getElementById(sheetId).classList.add('active');
    
    // Add active to clicked button
    event.target.classList.add('active');
}

// Mobile Navigation Toggle
function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile nav if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});
