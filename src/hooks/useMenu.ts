import { useEffect, useState } from "react";

export interface MenuItem{
    id: number
    image: string
    name: string
    description?: string
    price: number
  }

function useMenu() {
    const [menu, setMenu] = useState<MenuItem[]>([])
    function getMenu() {
        fetch("http://localhost:3000/menuItems")
          .then((res) => res.json())
          .then((data) => setMenu(data));
          
      }
      useEffect(() => {
        getMenu()
      }, [])

    return menu;
}

export default useMenu;



