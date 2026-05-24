import { PortableTextComponents } from '@portabletext/react'

export const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-serif font-bold text-gray-900 mt-12 mb-6">{children}</h2>,
    normal: ({ children }) => <p className="text-lg text-gray-800 leading-relaxed mb-6 font-serif">{children}</p>,
  },
}