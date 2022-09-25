export function getLocalizationData(data, locale) {
  const type = typeof data
  if (data.attributes.locale != locale) {
    const filtered = data.attributes.localizations.data.filter((localeData) => {
      return localeData.attributes.locale === locale
    })

    if (filtered.length) {
      if (type === "object") {
        return filtered[0]
      } else {
        return filtered
      }
    }
  } else {
    return data
  }
}

export function getLocalizationCollectionData(data, locale) {
  const res = data.filter((item) => {
    return item.attributes.locale === locale
  })
  return res
}
