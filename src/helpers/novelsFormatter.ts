
export function formatNovel(novelItemsSnapshot: any[]) {
  return novelItemsSnapshot.reduce((acc, curr) => {
    if (acc.length === 0)
      return [{
        volume: curr.volume,
        archs: [
          {
            arch: curr.arch,
            chapters: [
              {
                chapter: curr.chapter,
                id: curr.id,
                createdAt: curr.createdAt,
                updatedAt: curr.updatedAt,
                title: curr.title,
                name: curr.name
              }
            ]
          }
        ]
      }]

    let inserted = false
    let accCopy: any[] = [...acc]

    for (let i = 0; acc.length > i; i++) {
      if (curr.volume === acc[i].volume) {
        const volume = acc[i]
        for (let j = 0; j < volume.archs.length; j++) {
          if (curr.arch === volume.archs[j].arch) {
            accCopy[i].archs[j].chapters.push({
              chapter: curr.chapter,
              id: curr.id,
              createdAt: curr.createdAt,
              updatedAt: curr.updatedAt,
              title: curr.title,
              name: curr.name
            })
            inserted = true
            break
          }
        }
        if (!inserted) {
          accCopy[i].archs.push({
            arch: curr.arch,
            chapters: [{
              chapter: curr.chapter,
              id: curr.id,
              createdAt: curr.createdAt,
              updatedAt: curr.updatedAt,
              title: curr.title,
              name: curr.name
            }]
          })
          inserted = true
        }
      }
    }

    if (inserted)
      return [...accCopy]

    return [...accCopy, {
      volume: curr.volume,
      archs: [
        {
          arch: curr.arch,
          chapters: [
            {
              chapter: curr.chapter,
              id: curr.id,
              createdAt: curr.createdAt,
              updatedAt: curr.updatedAt,
              title: curr.title,
              name: curr.name
            }
          ]
        }
      ]
    }
    ]
  }, []).sort((a: any, b: any) => {
    return new Date(a.createdAt).valueOf() > new Date(b.createdAt).valueOf() ? 1 : -1
  }).sort((a: any, b: any) => {
    return a.chapter > b.chapter ? 1 : -1
  }).sort((a: any, b: any) => {
    return a.volume > b.volume ? 1 : -1
  })
}
