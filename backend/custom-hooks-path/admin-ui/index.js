import { ItemId, AddNewItem } from '@keystonejs/app-admin-ui/components';
export default {
  // re-implement the default AddNewItem and ItemId button + custom text
  
 
    customToast: ({ item, list, message }) => {
      // custom Toast for MyList
      if (list.key === 'MyList') {
        return (
          <div>
            <strong>My custom toast notification!</strong>
            {item && item._label_ ? <strong>{item._label_}</strong> : null}
          </div>
        );
      }
      // Default toast
      return (
        <div>
          {item && item._label_ ? <strong>{item._label_}</strong> : null}
          <div>{message}</div>
        </div>
      );
    },
  
};
