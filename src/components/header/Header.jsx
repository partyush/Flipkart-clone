import { AppBar, Toolbar, Box, styled, Typography} from '@mui/material';

const StyledHeader = styled(AppBar)`
background: #2874f0;
height: 55px;
`
const Component = styled(Box)`
margin-left: 12%;
line-height: 0;
`
const Subheading = styled(Typography)`
font-size:10px;
`
const PlusImage = styled('img')`
width : 10px;
`
const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'
    return (
    <StyledHeader>
        <Toolbar>
            <Component>
                <img src={logoURL} alt= "logo" style={{width:75}}/>
                <Box>
                    <Subheading>
                        Explore&nbsp;
                        <Box component= "span" style={{color: '#FFE500'}}>Plus</Box> 
                    </Subheading>
                    <PlusImage src={subURL} alt = "sub-logo"/>
                </Box>
            </Component>
        </Toolbar>
    </StyledHeader>
    )
}
export default Header;