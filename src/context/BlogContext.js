import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [
        ...state,
        {id: state.length + 1, title: `Post ${state.length + 1}`},
      ];
  }
};

const addBlogPost = (dispatch) => {
    return ()=>{
        dispatch({type: 'add_blogPost'});
    };

};

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost}, []);
