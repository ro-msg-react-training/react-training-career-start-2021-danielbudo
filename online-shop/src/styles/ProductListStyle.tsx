import {makeStyles} from '@material-ui/core';

export const useProductListStyles = makeStyles({
    productList:{
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '5%',
    },

    h1:{
        marginLeft:'11.5%',
        fontSize: '50px',
    },
    body:{
        backgroundColor: 'blanchedalmond',
    }
})