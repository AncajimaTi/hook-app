import React, { useEffect,useState } from 'react'

const Message = () => {
    const [coords, setcoords] = useState({x:0 , y:0})
    const { x , y }=coords;

    useEffect(() => {

        const mouseMove=(e)=>{
             const coors = {x:e.x , y:e.y}
           
            setcoords( coors )
        }

        //console.log('Componente Montado');
            window.addEventListener('mousemove',mouseMove);
        
        return () => {
            window.removeEventListener('mousemove',mouseMove);
            //console.log('Componente Desmontado')
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x:{x} , y:{y}
            </p>
        </div>
    )
}

export default Message
