import React from 'react'

const Compo = () => {
    return (
        <div>
            <div className="intro">
                <h1>Welcome to my website!</h1>
            </div>
            <p className="summary">
                You can find my thoughts here.
                <br /><br />
                <b>And <i>pictures</i></b> of scientists!
            </p>
        </div>
    )
}

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }


  const person1 = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export function TodoList1() {
    return (
      <div style={person1.theme}>
        <h1>{person1.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }

  const baseUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGregorio_Y._Zara&psig=AOvVaw3mY3vdKQlBNqbn1xbahARg&ust=1723876771650000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiDx9b1-IcDFQAAAAAdAAAAABAE';
  const person2 = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export function TodoList2() {
    return (
      <div style={person2.theme}>
        <h1>{person2.name}'s Todos</h1>
        <img
          className="avatar"
          src={baseUrl+person.imageId+person.imageSize+'.jpg'}
          alt={person2.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }

export default Compo