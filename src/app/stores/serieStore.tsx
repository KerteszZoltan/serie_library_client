import { create } from "zustand"

type SerieType = {
    titleEN:string, 
    titleHU:string, 
    descriptionEN:string,
    descriptionHU:string,
    setTitleEn:(titleEN:string)=>void
    setTitleHu:(titleEN:string)=>void
    setDescriptionEn:(titleEN:string)=>void
    setDescriptionHu:(titleEN:string)=>void
    reset:()=>void

}

const useSerieState = create<SerieType>((set)=>({
    titleEN:'',
    titleHU:'',
    descriptionEN:'',
    descriptionHU:'',
    setTitleEn:(titleEN)=>set({titleEN}),
    setTitleHu:(titleHU)=>set({titleHU}),
    setDescriptionEn:(descriptionEN)=>set({descriptionEN}),
    setDescriptionHu:(descriptionHU)=>set({descriptionHU}),
    reset:()=>set({titleEN:'', titleHU:'',descriptionEN:'',descriptionHU:''})
}))

export {useSerieState}