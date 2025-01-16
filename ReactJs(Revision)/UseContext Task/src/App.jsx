import { useContext } from 'react'
import './App.css'
import Shop from './Shop'
import Shoppage from './Shop'

function App() {

  const {item.title} = useContext(Shoppage);

  return (
    <>
    <Shoppage>
     <Shop/>
    </Shoppage>
    </>
  )
}

export default App



// ReactJS Practice Task
// Shop Page Product Wishlist Functionality
// This functionality enhances the user experience by enabling Wishlist management directly from the shop page and individual product views. It includes the following features:
// Add to Wishlist Button:
// Each product on the shop page has a button (usually represented by a heart icon) for adding the item to the wishlist.
// Heart Icon States:
// Outlined Heart: Indicates the product is not in the Wishlist.
// Filled Red Heart: Indicates the product has been added to the Wishlist.
// Dynamic State Handling:
// If a product is already in the Wishlist, the heart icon for that product will be displayed as a filled red heart on the shop page.
// If the product is not in the Wishlist, the heart icon will remain as an outlined heart.
// Real-time Sync Across Views:
// When a product is added to the wishlist on the shop page, the same product will display a filled red heart in the individual product view.
// Similarly, if a product is added to the wishlist from the product view, it will reflect as a filled red heart on the shop page.
// User Feedback:
// Clicking the heart icon toggles the wishlist state and provides visual feedback by switching between the outlined heart and the filled red heart.
// Persisting Wishlist State:
// Wishlist data can be managed using state management tools like React Context API