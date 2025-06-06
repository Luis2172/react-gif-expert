import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( ['One Punch'] );

    const OnAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory)) return;
        setCategories( [ newCategory, ...categories] )
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={ setCategories } categories= { categories }
                onNewCategory = { OnAddCategory }
            ></AddCategory>

            { categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    ></GifGrid>
                )
            ) }
        
        </>
    );
};