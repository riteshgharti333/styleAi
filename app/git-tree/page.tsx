"use client"

import { useState, useEffect, useRef, JSX } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Folder,
  File,
  ChevronRight,
  ChevronDown,
  Copy,
  Download,
  Search,
  ExternalLink,
  Github,
  Star,
  GitBranch,
  Calendar,
  User,
  Eye,
  FileCode,
  Loader2,
  Check,
  FolderOpen,
  FileText,
  Image as ImageIcon,
  Settings,
  Terminal,
  Package,
  Globe,
  Code,
  Lock,
  GitFork,
  Clock,
  Layers,
  Database,
  Server,
  Cpu,
  Smartphone,
  Layout,
  Palette,
  Zap,
  Flame,
  Sparkles,
  Menu,
  X,
  Filter,
  Grid,
  List,
  FolderTree,
  HardDrive,
  BarChart3,
  GitCommit,
  DownloadCloud,
  Share2,
  RefreshCw,
  Info,
  AlertCircle
} from 'lucide-react'
import { toast, Toaster } from 'sonner'

interface TreeNode {
  name: string
  path: string
  type: 'file' | 'dir'
  children?: TreeNode[]
  size?: number
  extension?: string
}

interface RepoInfo {
  name: string
  owner: string
  description: string
  stars: number
  forks: number
  lastUpdated: string
  defaultBranch: string
  language?: string
  languages?: Record<string, number>
  topics?: string[]
  license?: string
}

const GitTree = () => {
  const [repoUrl, setRepoUrl] = useState('https://github.com/riteshgharti333/hospital_management_app')
  const [treeData, setTreeData] = useState<TreeNode[]>([])
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set())
  const [repoInfo, setRepoInfo] = useState<RepoInfo | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [copiedPaths, setCopiedPaths] = useState<Set<string>>(new Set())
  const [viewMode, setViewMode] = useState<'tree' | 'grid'>('tree')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeFilter, setActiveFilter] = useState<'all' | 'folders' | 'files'>('all')
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null)

  // Get icon based on file extension
  const getFileIcon = (filename: string, size = 16) => {
    const ext = filename.split('.').pop()?.toLowerCase()
    const name = filename.toLowerCase()
    
    const iconMap: Record<string, JSX.Element> = {
      js: <FileCode size={size} className="text-yellow-400" />,
      ts: <FileCode size={size} className="text-blue-400" />,
      jsx: <FileCode size={size} className="text-cyan-400" />,
      tsx: <FileCode size={size} className="text-blue-500" />,
      html: <FileCode size={size} className="text-orange-500" />,
      css: <FileCode size={size} className="text-blue-500" />,
      scss: <FileCode size={size} className="text-pink-500" />,
      json: <Settings size={size} className="text-yellow-600" />,
      md: <FileText size={size} className="text-gray-500" />,
      py: <FileCode size={size} className="text-green-500" />,
      java: <FileCode size={size} className="text-red-500" />,
      cpp: <FileCode size={size} className="text-blue-600" />,
      c: <FileCode size={size} className="text-blue-700" />,
      go: <FileCode size={size} className="text-cyan-600" />,
      rs: <FileCode size={size} className="text-orange-600" />,
      php: <FileCode size={size} className="text-purple-500" />,
      rb: <FileCode size={size} className="text-red-600" />,
      sh: <Terminal size={size} className="text-green-600" />,
      yml: <Settings size={size} className="text-gray-500" />,
      yaml: <Settings size={size} className="text-gray-500" />,
      xml: <FileCode size={size} className="text-orange-600" />,
      svg: <ImageIcon size={size} className="text-pink-500" />,
      png: <ImageIcon size={size} className="text-green-500" />,
      jpg: <ImageIcon size={size} className="text-blue-500" />,
      jpeg: <ImageIcon size={size} className="text-blue-500" />,
      gif: <ImageIcon size={size} className="text-purple-500" />,
      pdf: <FileText size={size} className="text-red-500" />,
      txt: <FileText size={size} className="text-gray-500" />,
      lock: <Lock size={size} className="text-gray-600" />,
      gitignore: <GitCommit size={size} className="text-gray-600" />,
      env: <Settings size={size} className="text-gray-600" />,
      sql: <Database size={size} className="text-blue-600" />,
      dart: <Smartphone size={size} className="text-blue-500" />,
      kt: <Smartphone size={size} className="text-purple-500" />,
      swift: <AppleLogo size={size} className="text-orange-500" />,
    }

    // Special file names
    if (name === 'package.json') return <Package size={size} className="text-red-500" />
    if (name === 'dockerfile') return <Server size={size} className="text-blue-500" />
    if (name === 'readme.md') return <FileText size={size} className="text-blue-500" />
    if (name === 'license') return <FileText size={size} className="text-gray-500" />

    return iconMap[ext || ''] || <File size={size} className="text-gray-400" />
  }

  // Apple logo component (since not in lucide)
  const AppleLogo = ({ size = 16, className }: { size?: number; className?: string }) => (
    <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.31-2.33 1.05-3.11z"/>
    </svg>
  )

  // Parse GitHub URL
  const parseGitHubUrl = (url: string) => {
    try {
      const urlObj = new URL(url)
      const parts = urlObj.pathname.split('/').filter(Boolean)
      if (parts.length >= 2) {
        return { owner: parts[0], repo: parts[1] }
      }
    } catch {
      const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/)
      if (match) return { owner: match[1], repo: match[2] }
    }
    return null
  }

  // Recursively fetch directory contents
  const fetchDirectoryContents = async (owner: string, repo: string, path: string = '', branch: string): Promise<TreeNode[]> => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`
      )
      
      if (!response.ok) return []
      
      const contents = await response.json()
      const tree: TreeNode[] = []
      
      for (const item of Array.isArray(contents) ? contents : [contents]) {
        const node: TreeNode = {
          name: item.name,
          path: path ? `${path}/${item.name}` : item.name,
          type: item.type === 'dir' ? 'dir' : 'file',
          extension: item.type === 'file' ? item.name.split('.').pop() : undefined,
          size: item.size
        }
        
        if (item.type === 'dir') {
          // Fetch subdirectory contents
          node.children = await fetchDirectoryContents(owner, repo, node.path, branch)
        }
        
        tree.push(node)
      }
      
      return tree.sort((a, b) => {
        if (a.type === 'dir' && b.type !== 'dir') return -1
        if (a.type !== 'dir' && b.type === 'dir') return 1
        return a.name.localeCompare(b.name)
      })
    } catch (error) {
      console.error('Error fetching directory:', error)
      return []
    }
  }

  // Fetch repository data
  const fetchRepoData = async () => {
    const repoData = parseGitHubUrl(repoUrl)
    if (!repoData) {
      toast.error('Invalid GitHub URL format')
      return
    }

    setIsLoading(true)
    setTreeData([])
    setRepoInfo(null)
    setExpandedFolders(new Set())
    setSelectedNode(null)

    try {
      // Fetch repository info
      const [repoResponse, languagesResponse] = await Promise.all([
        fetch(`https://api.github.com/repos/${repoData.owner}/${repoData.repo}`),
        fetch(`https://api.github.com/repos/${repoData.owner}/${repoData.repo}/languages`)
      ])

      if (!repoResponse.ok) throw new Error('Repository not found or is private')
      
      const repoDataJson = await repoResponse.json()
      const languages = await languagesResponse.json()

      // Get default branch
      const defaultBranch = repoDataJson.default_branch || 'main'

      setRepoInfo({
        name: repoDataJson.name,
        owner: repoDataJson.owner.login,
        description: repoDataJson.description || 'No description',
        stars: repoDataJson.stargazers_count,
        forks: repoDataJson.forks_count,
        lastUpdated: new Date(repoDataJson.updated_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        defaultBranch: defaultBranch,
        language: repoDataJson.language,
        languages: languages,
        topics: repoDataJson.topics || [],
        license: repoDataJson.license?.name
      })

      // Fetch repository tree
      const tree = await fetchDirectoryContents(repoData.owner, repoData.repo, '', defaultBranch)
      setTreeData(tree)
      
      // Expand root directory by default
      setExpandedFolders(new Set(['']))

      toast.success('Repository structure loaded!', {
        description: `Found ${tree.filter(n => n.type === 'dir').length} folders and ${tree.filter(n => n.type === 'file').length} files`
      })
    } catch (error: any) {
      console.error('Error:', error)
      toast.error('Failed to fetch repository', {
        description: error.message || 'Please check the URL and try again'
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Toggle folder
  const toggleFolder = (path: string, event?: React.MouseEvent) => {
    event?.stopPropagation()
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(path)) {
      newExpanded.delete(path)
    } else {
      newExpanded.add(path)
    }
    setExpandedFolders(newExpanded)
  }

  // Copy path to clipboard
  const copyPath = (path: string, event?: React.MouseEvent) => {
    event?.stopPropagation()
    navigator.clipboard.writeText(path)
    setCopiedPaths(prev => new Set(prev).add(path))
    toast.success('Path copied to clipboard!')
    
    setTimeout(() => {
      setCopiedPaths(prev => {
        const newSet = new Set(prev)
        newSet.delete(path)
        return newSet
      })
    }, 2000)
  }

  // Download structure
  const downloadStructure = () => {
    if (!treeData.length) {
      toast.error('No structure to download')
      return
    }

    const generateText = (nodes: TreeNode[], indent = '') => {
      let text = ''
      nodes.forEach(node => {
        const prefix = node.type === 'dir' ? '📁 ' : '📄 '
        text += `${indent}${prefix}${node.name}\n`
        if (node.type === 'dir' && node.children) {
          text += generateText(node.children, indent + '  ')
        }
      })
      return text
    }

    const text = `Repository: ${repoInfo?.owner}/${repoInfo?.name}\nURL: ${repoUrl}\nGenerated: ${new Date().toLocaleString()}\n\n${generateText(treeData)}`
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${repoInfo?.name || 'repo'}-structure.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    toast.success('Structure downloaded!')
  }

  // Filter tree
  const filteredTree = treeData.filter(node => {
    if (activeFilter === 'folders' && node.type !== 'dir') return false
    if (activeFilter === 'files' && node.type !== 'file') return false
    if (!searchTerm) return true
    return node.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           node.path.toLowerCase().includes(searchTerm.toLowerCase())
  })

  // Calculate statistics
  const stats = {
    folders: treeData.filter(n => n.type === 'dir').length,
    files: treeData.filter(n => n.type === 'file').length,
    totalSize: treeData.reduce((acc, n) => acc + (n.size || 0), 0),
    fileTypes: new Set(treeData.flatMap(n => n.extension || []).filter(Boolean)).size
  }

  // Render tree node
  const renderTreeNode = (node: TreeNode, depth = 0) => {
    const isExpanded = expandedFolders.has(node.path)
    const isSelected = selectedNode?.path === node.path

    return (
      <div key={node.path}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: depth * 0.05 }}
          onClick={() => setSelectedNode(node)}
          className={`flex items-center py-2 px-3 rounded-xl transition-all cursor-pointer group
            ${isSelected 
              ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 dark:border-blue-800/50' 
              : 'hover:bg-gray-50/50 dark:hover:bg-gray-800/50'
            }`}
          style={{ marginLeft: `${depth * 24}px` }}
        >
          {node.type === 'dir' ? (
            <button
              onClick={(e) => toggleFolder(node.path, e)}
              className="flex items-center gap-3 flex-1 text-left"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-400"
              >
                <ChevronRight size={18} />
              </motion.div>
              <div className="relative">
                <motion.div
                  animate={{ scale: isExpanded ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {isExpanded ? (
                    <FolderOpen size={20} className="text-blue-500" />
                  ) : (
                    <Folder size={20} className="text-blue-500" />
                  )}
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-gray-800 dark:text-gray-200">{node.name}</span>
                <span className="text-xs text-gray-500">
                  {node.children?.length || 0} items
                </span>
              </div>
            </button>
          ) : (
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 flex justify-center">
                {getFileIcon(node.name, 20)}
              </div>
              <div className="flex flex-col flex-1">
                <span className="font-medium text-gray-800 dark:text-gray-200">{node.name}</span>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{node.extension?.toUpperCase() || 'File'}</span>
                  {node.size && (
                    <>
                      <span>•</span>
                      <span>{(node.size / 1024).toFixed(1)} KB</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => copyPath(node.path, e)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title="Copy path"
            >
              {copiedPaths.has(node.path) ? (
                <Check size={16} className="text-green-500" />
              ) : (
                <Copy size={16} className="text-gray-500" />
              )}
            </button>
            <a
              href={`${repoUrl}/blob/${repoInfo?.defaultBranch}/${node.path}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title="View on GitHub"
            >
              <ExternalLink size={16} className="text-gray-500" />
            </a>
          </div>
        </motion.div>

        <AnimatePresence>
          {node.type === 'dir' && isExpanded && node.children && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {node.children.map(child => renderTreeNode(child, depth + 1))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Render grid view
  const renderGridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {filteredTree.map((node, index) => (
        <motion.div
          key={node.path}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => setSelectedNode(node)}
          className={`p-4 rounded-2xl border transition-all cursor-pointer group
            ${selectedNode?.path === node.path
              ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-200 dark:border-blue-800'
              : 'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
            }`}
        >
          <div className="flex flex-col items-center text-center">
            <div className={`p-3 rounded-xl mb-3 ${
              node.type === 'dir' 
                ? 'bg-blue-100/50 dark:bg-blue-900/30' 
                : 'bg-gray-100/50 dark:bg-gray-800/50'
            }`}>
              {node.type === 'dir' ? (
                <Folder size={32} className="text-blue-500" />
              ) : (
                getFileIcon(node.name, 32)
              )}
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 truncate w-full">
              {node.name}
            </h4>
            <p className="text-xs text-gray-500 mb-3">
              {node.type === 'dir' ? 'Folder' : node.extension?.toUpperCase() || 'File'}
            </p>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => copyPath(node.path, e)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Copy size={14} />
              </button>
              <a
                href={`${repoUrl}/blob/${repoInfo?.defaultBranch}/${node.path}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  // Initialize with example URL
  useEffect(() => {
    fetchRepoData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
      <Toaster 
        position="top-right"
        toastOptions={{
          className: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
          duration: 3000,
        }}
      />
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-50" />
                <div className="relative p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                  <FolderTree size={28} className="text-white" />
                </div>
              </motion.div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  RepoTREE
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Visualize GitHub repository structures
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => fetchRepoData()}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <RefreshCw size={18} />
                )}
                Refresh
              </button>
              
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* URL Input */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-1 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="flex items-center gap-2 p-3">
                <Github className="text-gray-400" size={20} />
                <input
                  type="text"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  placeholder="https://github.com/username/repository"
                  className="flex-1 bg-transparent border-none outline-none text-gray-800 dark:text-gray-200 placeholder-gray-400"
                  onKeyPress={(e) => e.key === 'Enter' && fetchRepoData()}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={fetchRepoData}
                  disabled={isLoading}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  {isLoading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Eye size={18} />
                  )}
                  Visualize
                </motion.button>
              </div>
            </div>
          </div>
        </motion.header>

        <div className="flex gap-6">
          {/* Sidebar */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.aside
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                className="w-80 flex-shrink-0"
              >
                {/* Repository Info Card */}
                {repoInfo && (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 mb-6 shadow-2xl"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-xl font-bold mb-1">{repoInfo.name}</h2>
                        <p className="text-gray-300 text-sm">{repoInfo.owner}</p>
                      </div>
                      <Github size={24} />
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-6">{repoInfo.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Star size={14} className="text-yellow-400" />
                          <span>Stars</span>
                        </div>
                        <span className="font-semibold">{repoInfo.stars.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <GitFork size={14} className="text-green-400" />
                          <span>Forks</span>
                        </div>
                        <span className="font-semibold">{repoInfo.forks.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-blue-400" />
                          <span>Updated</span>
                        </div>
                        <span className="font-semibold">{repoInfo.lastUpdated}</span>
                      </div>
                      
                      {repoInfo.language && (
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Code size={14} className="text-purple-400" />
                            <span>Language</span>
                          </div>
                          <span className="font-semibold">{repoInfo.language}</span>
                        </div>
                      )}
                    </div>
                    
                    {repoInfo.topics && repoInfo.topics.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold mb-2">Topics</h4>
                        <div className="flex flex-wrap gap-2">
                          {repoInfo.topics.slice(0, 3).map(topic => (
                            <span
                              key={topic}
                              className="px-2 py-1 bg-white/10 rounded-lg text-xs"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Stats Card */}
                {treeData.length > 0 && (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                      <BarChart3 size={18} />
                      Repository Stats
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <Folder size={16} className="text-blue-500" />
                          </div>
                          <span className="text-gray-600 dark:text-gray-400">Folders</span>
                        </div>
                        <span className="font-bold text-gray-800 dark:text-gray-200">
                          {stats.folders}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                            <File size={16} className="text-green-500" />
                          </div>
                          <span className="text-gray-600 dark:text-gray-400">Files</span>
                        </div>
                        <span className="font-bold text-gray-800 dark:text-gray-200">
                          {stats.files}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                            <Layers size={16} className="text-purple-500" />
                          </div>
                          <span className="text-gray-600 dark:text-gray-400">File Types</span>
                        </div>
                        <span className="font-bold text-gray-800 dark:text-gray-200">
                          {stats.fileTypes}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                            <HardDrive size={16} className="text-yellow-500" />
                          </div>
                          <span className="text-gray-600 dark:text-gray-400">Total Size</span>
                        </div>
                        <span className="font-bold text-gray-800 dark:text-gray-200">
                          {stats.totalSize / 1024 > 1024
                            ? `${(stats.totalSize / 1024 / 1024).toFixed(2)} MB`
                            : `${(stats.totalSize / 1024).toFixed(2)} KB`}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Quick Actions */}
                {treeData.length > 0 && (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 mt-6 shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                      <Zap size={18} />
                      Quick Actions
                    </h3>
                    
                    <div className="space-y-3">
                      <button
                        onClick={downloadStructure}
                        className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 dark:hover:from-blue-900/30 transition-all group"
                      >
                        <DownloadCloud size={18} className="text-blue-500 group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          Download Structure
                        </span>
                      </button>
                      
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href)
                          toast.success('Link copied to clipboard!')
                        }}
                        className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20 hover:from-purple-100 dark:hover:from-purple-900/30 transition-all group"
                      >
                        <Share2 size={18} className="text-purple-500 group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          Share Repository
                        </span>
                      </button>
                      
                      <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-800 dark:to-gray-800/50 hover:from-gray-100 dark:hover:from-gray-700 transition-all group"
                      >
                        <ExternalLink size={18} className="text-gray-500 group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          Open on GitHub
                        </span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <main className="flex-1">
            {/* Controls Bar */}
            {treeData.length > 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 mb-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search files and folders..."
                        className="pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64"
                      />
                    </div>

                    <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
                      {(['all', 'folders', 'files'] as const).map(filter => (
                        <button
                          key={filter}
                          onClick={() => setActiveFilter(filter)}
                          className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                            activeFilter === filter
                              ? 'bg-white dark:bg-gray-600 shadow-sm'
                              : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
                      <button
                        onClick={() => setViewMode('tree')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          viewMode === 'tree'
                            ? 'bg-white dark:bg-gray-600 shadow-sm'
                            : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        <List size={16} />
                        Tree
                      </button>
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          viewMode === 'grid'
                            ? 'bg-white dark:bg-gray-600 shadow-sm'
                            : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        <Grid size={16} />
                        Grid
                      </button>
                    </div>

                    <div className="text-sm text-gray-500">
                      {filteredTree.length} items
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Content Area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="mb-6"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full"></div>
                      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Fetching Repository
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Loading structure from GitHub...
                  </p>
                </div>
              ) : treeData.length > 0 ? (
                <div className="p-4 max-h-[calc(100vh-300px)] overflow-y-auto">
                  {viewMode === 'tree' ? (
                    <div className="space-y-1">
                      {filteredTree.map(node => renderTreeNode(node))}
                    </div>
                  ) : (
                    renderGridView()
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-20" />
                    <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                      <FolderTree size={64} className="text-gray-400 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                        No Repository Loaded
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
                        Enter a GitHub repository URL above to visualize its folder structure. 
                        Understand project architecture without cloning repositories.
                      </p>
                      <div className="flex flex-wrap justify-center gap-3">
                        <button
                          onClick={() => setRepoUrl('https://github.com/vercel/next.js')}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                          Next.js
                        </button>
                        <button
                          onClick={() => setRepoUrl('https://github.com/tailwindlabs/tailwindcss')}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                          Tailwind
                        </button>
                        <button
                          onClick={() => setRepoUrl('https://github.com/facebook/react')}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                          React
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Selected File Info */}
            <AnimatePresence>
              {selectedNode && (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  className="mt-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {selectedNode.type === 'dir' ? (
                        <FolderOpen size={24} className="text-blue-500" />
                      ) : (
                        getFileIcon(selectedNode.name, 24)
                      )}
                      <div>
                        <h3 className="font-bold text-gray-800 dark:text-gray-200">
                          {selectedNode.name}
                        </h3>
                        <p className="text-sm text-gray-500">{selectedNode.path}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedNode(null)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Type</p>
                      <p className="font-semibold capitalize">{selectedNode.type}</p>
                    </div>
                    
                    {selectedNode.extension && (
                      <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Extension</p>
                        <p className="font-semibold">{selectedNode.extension.toUpperCase()}</p>
                      </div>
                    )}
                    
                    {selectedNode.size && (
                      <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Size</p>
                        <p className="font-semibold">
                          {(selectedNode.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    )}
                    
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Actions</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => copyPath(selectedNode.path)}
                          className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                        >
                          <Copy size={14} />
                        </button>
                        <a
                          href={`${repoUrl}/blob/${repoInfo?.defaultBranch}/${selectedNode.path}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            <p className="mb-2">
              Made with <span className="text-red-500">❤</span> using Next.js, Framer Motion & Lucide Icons
            </p>
            <p>
              Visualize GitHub repository structures without cloning. Perfect for code reviews and architecture understanding.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default GitTree