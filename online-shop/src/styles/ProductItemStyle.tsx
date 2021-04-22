import {makeStyles} from '@material-ui/core';

export const useProductItemStyles = makeStyles({
    productDetail:{
        verticalAlign: 'middle',
        display:'block',
    },
    product:{
        color: '#ffffff',
        marginLeft: '7%',
        marginRight: '7%',
        marginBotton: '7%',
        marginTop: '3%',
        display: 'block',
        padding: '5px',
        width: '15%',
        height:'5%',
        backgroundColor:'#3B7EFF',
        borderRadius: '7%',
        border: '2px solid transparent',
        '&:hover':{
            cursor: 'pointer',
            color: '#000000',
            backgroundColor: '#BEE0FF',
            border: '2px solid #3B7EFF'
        }
    }
    
})