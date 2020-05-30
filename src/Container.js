import styled from 'styled-components'
import { mediaQuery } from './MediaQuery';

/* 
   Date   : 2020-05-30 15:07:21
   Author : Arhua Ho
   Content: 作為Flex外層容器組件使用
*/
export const Container = styled.div.attrs((props) => ({}))`
    //Flex設置
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    flex-direction: ${props => props?.theme?.direction ?? 'unset'}; //控制子組件排列方向: row、row-reverse、column、column-reverse
    justify-content: ${props => props?.theme?.justify ?? 'unset'};  //控制子組件在水平方向上的對齊: flex-start、center、flex-end、space-between、space-around、space-evenly
    align-items: ${props => props?.theme?.alignItems ?? 'unset'};   //控制子組件在垂直方向上的對齊: flex-start、center、flex-end、stretch、baseline

    //常用屬性
    position: ${props => props?.theme?.position ?? 'unset'};        //控制position屬性: static、relative、fixed、absolute、sticky、inherit、initial
    padding: ${props => props?.theme?.padding ?? 'unset'};
    height: ${props => props?.theme?.height ?? 'unset'};
    background-color: ${props => props?.theme?.backgroundColor ?? 'unset'};
    background-image: ${props => 'url(' + props?.theme?.img + ')' ?? 'usset'};
    background-position: ${props => props?.theme?.backgroundPosition ?? 'usset'};
    background-position-y: ${props => props?.theme?.positiony ?? 'usset'};
    background-position-x: ${props => props?.theme?.positionx ?? 'usset'};
    background-repeat: ${props => props?.theme?.backgroundRepeat ?? 'unset'};
    background-size: ${props => props?.theme?.backgroundSize ?? 'unset'};
    background-attachment: ${props => props?.theme?.attachment ?? 'usset'};
    min-width: ${props => props?.theme?.minWidth ?? 'unset'};
    box-shadow: ${props => props?.theme?.boxShadow ?? 'unset'};
    margin-top: ${props => props?.theme?.marginTop ?? 'unset'};

    @media ${mediaQuery.mobileL} { 
        justify-content: ${props => props?.theme?.mobileL?.justify ? props.theme.mobileL.justify : (props?.theme?.justify ?? 'unset')};
        max-width: ${props => props?.theme?.mobileL?.occupy ? props.theme.mobileL.occupy * 100 / 12 + '%' : (props?.theme?.occupy ? props.theme.occupy * 100 / 12 + '%' : props?.theme?.occupy ?? 'unset')};                  
        flex-basis: ${props => props?.theme?.mobileL?.occupy ? props.theme.mobileL.occupy * 100 / 12 + '%' : (props?.theme?.occupy ? props.theme.occupy * 100 / 12 + '%' : props?.theme?.occupy ?? 'unset')};
        padding: ${props => props?.theme?.mobileL?.padding ? props.theme.mobileL.padding : (props?.theme?.padding ?? 'unset')};
        background-color: ${props => props?.theme?.mobileL?.backgroundColor ? props.theme.mobileL.backgroundColor : (props?.theme?.backgroundColor ?? 'unset')};
        height: ${props => props?.theme?.mobileL?.height ? props.theme.mobileL.height : (props?.theme?.height ?? 'unset')};
        width: ${props => props?.theme?.mobileL?.width ? props.theme.mobileL.width : (props?.theme?.width ?? 'unset')}; 
        margin: ${props => props?.theme?.mobileL?.margin ? props.theme.mobileL.margin : (props?.theme?.margin ?? 'unset')}; 

        background-attachment: ${props => props?.theme?.mobileL?.backgroundAttachment ? props.theme.mobileL.backgroundAttachment : (props?.theme?.backgroundAttachment ?? 'unset')}; 
        background-image: ${props => props?.theme?.mobileL?.img ? 'url(' + props.theme.mobileL.img + ')' : (props?.theme?.img ?? 'unset')}; 
        background-position: ${props => props?.theme?.mobileL?.backgroundPosition ? props.theme.mobileL.backgroundPosition : (props?.theme?.backgroundPosition ?? 'unset')};
        background-position-y: ${props => props?.theme?.mobileL?.positiony ? props.theme.mobileL.positiony : (props?.theme?.positiony ?? 'unset')};
        background-position-x: ${props => props?.theme?.mobileL?.positionx ? props.theme.mobileL.positionx : (props?.theme?.positionx ?? 'unset')};
        background-repeat: ${props => props?.theme?.mobileL?.backgroundRepeat ? props.theme.mobileL.backgroundRepeat : (props?.theme?.backgroundRepeat ?? 'unset')};
        background-size: ${props => props?.theme?.mobileL?.backgroundSize ? props.theme.mobileL.backgroundSize : (props?.theme?.backgroundSize ?? 'unset')};
        border-top: ${props => props?.theme?.mobileL?.borderTop ? props.theme.mobileL.borderTop : (props?.theme?.borderTop ?? 'unset')};
    }
    
`

/* 
   Date   : 2020-05-30 15:07:21
   Author : Arhua Ho
   Content: 作為Flex次層容器組件使用，
            選用斷點:
                mobileL: '425px'
*/
export const SubContainer = styled.div.attrs((props) => ({}))`
    //Flex設置
    flex-grow: 0;
    max-width: ${props => props?.theme?.occupy ? props.theme.occupy * 100 / 12 + '%' : props?.theme?.occupy ?? 'unset'};                  
    flex-basis: ${props => props?.theme?.occupy ? props.theme.occupy * 100 / 12 + '%' : props?.theme?.occupy ?? 'unset'};
    box-sizing: border-box;

    //固定屬性
    height: ${props => props?.theme?.height ?? 'unset'}; 
    background-color: ${props => props?.theme?.backgroundColor ?? 'unset'};
    padding: ${props => props?.theme?.padding ?? 'unset'}; 
    cursor: ${props => props?.theme?.cursor ?? 'unset'}; 
    margin: ${props => props?.theme?.margin ?? 'unset'}; 
    transition: ${props => props?.theme?.transition ?? 'unset'}; 
 
    
    //常用屬性
    text-align: ${props => props?.theme?.textAlign ?? 'unset'}; 
    font-size: ${props => props?.theme?.fontSize ?? 'unset'}; 
    color: ${props => props?.theme?.color ?? 'unset'}; 
    width: ${props => props?.theme?.width ?? 'unset'}; 
    background-attachment: ${props => props?.theme?.backgroundAttachment ?? 'unset'}; 
    background-image: ${props => 'url(' + props?.theme?.img + ')' ?? 'usset'};
    background-position: ${props => props?.theme?.backgroundPosition ?? 'usset'};
    background-position-y: ${props => props?.theme?.positiony ?? 'usset'};
    background-position-x: ${props => props?.theme?.positionx ?? 'usset'};
    background-repeat: ${props => props?.theme?.backgroundRepeat ?? 'unset'};
    background-size: ${props => props?.theme?.backgroundSize ?? 'unset'};
    border: ${props => props?.theme?.border ?? 'unset'};
    border-top: ${props => props?.theme?.borderTop ?? 'unset'};

    @media ${mediaQuery.mobileL} { 
        max-width: ${props => props?.theme?.mobileL?.occupy ? props.theme.mobileL.occupy * 100 / 12 + '%' : (props?.theme?.occupy ? props.theme.occupy * 100 / 12 + '%' : props?.theme?.occupy ?? 'unset')};                  
        flex-basis: ${props => props?.theme?.mobileL?.occupy ? props.theme.mobileL.occupy * 100 / 12 + '%' : (props?.theme?.occupy ? props.theme.occupy * 100 / 12 + '%' : props?.theme?.occupy ?? 'unset')};
        padding: ${props => props?.theme?.mobileL?.padding ? props.theme.mobileL.padding : (props?.theme?.padding ?? 'unset')};
        background-color: ${props => props?.theme?.mobileL?.backgroundColor ? props.theme.mobileL.backgroundColor : (props?.theme?.backgroundColor ?? 'unset')};
        height: ${props => props?.theme?.mobileL?.height ? props.theme.mobileL.height : (props?.theme?.height ?? 'unset')};
        width: ${props => props?.theme?.mobileL?.width ? props.theme.mobileL.width : (props?.theme?.width ?? 'unset')}; 
        margin: ${props => props?.theme?.mobileL?.margin ? props.theme.mobileL.margin : (props?.theme?.margin ?? 'unset')}; 

        background-attachment: ${props => props?.theme?.mobileL?.backgroundAttachment ? props.theme.mobileL.backgroundAttachment : (props?.theme?.backgroundAttachment ?? 'unset')}; 
        background-image: ${props => props?.theme?.mobileL?.img ? 'url(' + props.theme.mobileL.img + ')' : (props?.theme?.img ?? 'unset')}; 
        background-position: ${props => props?.theme?.mobileL?.backgroundPosition ? props.theme.mobileL.backgroundPosition : (props?.theme?.backgroundPosition ?? 'unset')};
        background-position-y: ${props => props?.theme?.mobileL?.positiony ? props.theme.mobileL.positiony : (props?.theme?.positiony ?? 'unset')};
        background-position-x: ${props => props?.theme?.mobileL?.positionx ? props.theme.mobileL.positionx : (props?.theme?.positionx ?? 'unset')};
        background-repeat: ${props => props?.theme?.mobileL?.backgroundRepeat ? props.theme.mobileL.backgroundRepeat : (props?.theme?.backgroundRepeat ?? 'unset')};
        background-size: ${props => props?.theme?.mobileL?.backgroundSize ? props.theme.mobileL.backgroundSize : (props?.theme?.backgroundSize ?? 'unset')};
        border-top: ${props => props?.theme?.mobileL?.borderTop ? props.theme.mobileL.borderTop : (props?.theme?.borderTop ?? 'unset')};
    }

`
