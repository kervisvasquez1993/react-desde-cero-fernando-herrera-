import useFetchGifs from '../../hooks/useFetchGifs';
import ListTitleGif from '../Gif/ListTitleGif';

const Category = ({category}) => {
    const {images, isLoading} = useFetchGifs(category)
    let resultado =
        isLoading ? (
            <ListTitleGif listado={images} />
        ) : (
            "esperando respuesta.."
        );
  return resultado;
}

export default Category