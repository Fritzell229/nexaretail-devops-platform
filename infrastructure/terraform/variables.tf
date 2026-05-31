variable "environment" {
  description = "Environnement de déploiement"
  type        = string
  default     = "prod"
}

variable "location" {
  description = "Région Azure"
  type        = string
  default     = "westeurope"
}

variable "kubernetes_version" {
  description = "Version Kubernetes AKS"
  type        = string
  default     = "1.35.4"
}

variable "aks_node_count" {
  description = "Nombre de noeuds AKS"
  type        = number
  default     = 2
}

variable "acr_name" {
  description = "Nom de l'Azure Container Registry"
  type        = string
  default     = "nexaretailfritz"
}