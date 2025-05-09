export default ({ router }) => {
    router.addRoutes([
      { path: '/features/external-storage.html', redirect: '/features/upload-storage/' },
      { path: '/features/external-storage.html', redirect: '/features/upload-storage/' },
      { path: '/settings/asset-storage.html', redirect: '/settings/site-storage/' },
      { path: '/settings/external-storage.html', redirect: '/settings/upload-storage/' },
      { path: '/features/external-storage/', redirect: '/features/upload-storage/' },
      { path: '/features/external-storage/', redirect: '/features/upload-storage/' },
      { path: '/settings/asset-storage/', redirect: '/settings/site-storage/' },
      { path: '/settings/external-storage/', redirect: '/settings/upload-storage/' },
    ])
  }
