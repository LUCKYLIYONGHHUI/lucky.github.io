hexo.extend.filter.register('before_post_render', function(data) {
  if (data.title && !data.tags?.find(t => t.name === '案例区')) {
    data.tags = [...(data.tags || []), {name: '案例区'}]
  }
  return data
})