import style from 'styled-components';

export const Style = style.div`
    .image-content {
        width: 500px;
        height: 100vh;
    }
    img {
        width: 100%;
        height: 100%;
    }  
    .slick-arrow {
        /* background: #4cd137 !important; */
        z-index: 10 !important;
        margin: 1rem !important;
    }
    
    .slick-prev {
        left: 0 !important;
    }
    .slick-next {
        right: 0 !important;
    }
`;