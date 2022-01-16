import React from "react";

import { Card } from "./Components/Card";
import { List } from "./Components/List";

const list=[
{text: 'Aliquip culpa eu quis enim ea excepteur nisi occaecat. Enim aliqua esse veniam occaecat ea dolor minim tempor commodo do eiusmod reprehenderit. Sint incididunt nisi et ullamco cillum reprehenderit sit magna id cillum ad minim cillum. Aliqua sunt esse ut irure culpa ut aliquip cillum ullamco veniam.'},
{text: 'Magna tempor elit officia exercitation officia commodo magna minim cupidatat fugiat. Mollit magna do ut adipisicing labore ea. Ad incididunt ut voluptate minim pariatur reprehenderit. Aute Lorem proident reprehenderit consequat ullamco.'},
{text: 'Laborum deserunt mollit voluptate consequat aute irure ipsum elit aliquip exercitation. Ullamco et proident voluptate in tempor veniam. Duis sint mollit dolor officia anim amet fugiat cupidatat nostrud sint. Minim aliqua commodo occaecat est ea fugiat aliquip consequat sunt. Sit sint id magna incididunt labore. Incididunt eiusmod cillum dolore eiusmod. Lorem incididunt ipsum cupidatat occaecat cupidatat.'}
];

function App() {
  return (
    <React.Fragment>
      <List>
        {list.map(item=>(
          <Card 
          text={item.text}
          />
        )
          )}

      </List>
    
    </React.Fragment>
  );
}

export default App;
