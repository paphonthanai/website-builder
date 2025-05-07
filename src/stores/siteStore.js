// src/store/siteStore.js
import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

export const useSiteStore = defineStore('site', {
  state: () => ({
    sites: [],
  }),
  actions: {
    fetchSites() {
      const raw = localStorage.getItem('sites')
      this.sites = raw ? JSON.parse(raw) : []
    },
    createSite(name) {
      const newSite = {
        id: nanoid(8),
        name,
        content: {
          title: 'หัวข้อหลัก',
          description: 'คำอธิบายเว็บไซต์ของฉัน'
        },
        template: '<h1>{{ title }}</h1><p>{{ description }}</p>',
        createdAt: new Date().toISOString()
      }
      this.sites.push(newSite)
      this.saveAll()
    },
    loadSite(siteId) {
      const site = this.sites.find(site => site.id === siteId)
      if (!site) throw new Error('Site not found')
      return site
    },
    saveSite(siteId, newContent) {
      const site = this.sites.find(site => site.id === siteId)
      if (site) {
        site.content = newContent
        this.saveAll()
      }
    },
    saveAll() {
      localStorage.setItem('sites', JSON.stringify(this.sites))
    }
  }
})
