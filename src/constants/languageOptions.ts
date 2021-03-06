export interface LanguageOptions {
  id: number
  name: string
  label: string
  value: string
}

export const languageOptions: LanguageOptions[] = [
  {
    id: 63,
    name: 'JavaScript (Node.js 12.14.0)',
    label: 'JavaScript (Node.js 12.14.0)',
    value: 'javascript'
  },
  {
    id: 53,
    name: 'C++ (GCC 8.3.0)',
    label: 'C++ (GCC 8.3.0)',
    value: 'cpp'
  },
  {
    id: 62,
    name: 'Java (OpenJDK 13.0.1)',
    label: 'Java (OpenJDK 13.0.1)',
    value: 'java'
  },
  {
    id: 71,
    name: 'Python (3.8.1)',
    label: 'Python (3.8.1)',
    value: 'python'
  }
]
