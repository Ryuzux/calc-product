export interface Recipe {
  id: number
  description: string
  fileName: string
  fileData?: Buffer
  uploadedAt: Date | null
}