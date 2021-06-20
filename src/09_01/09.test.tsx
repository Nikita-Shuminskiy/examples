

type mannType = {
    old:string
    color:string
 }
 test('what is color in mAn', () => {
     const man:mannType  = {
         old:'Yes',
         color:'blue'
     }
     let woman = man
     woman.color = 'red'
     expect(woman.color).toBe('red')
     }
 )