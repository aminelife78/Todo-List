import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Categories = ({filtreCategories}) => {



 

  return (
    <ButtonGroup sx={{marginBottom:"30px"}} variant="outlined" aria-label="outlined button group">
      <Button onClick={(e)=>filtreCategories(e.target.value)} value="tous">Tous</Button>
      <Button onClick={(e)=>filtreCategories(e.target.value)}value="fini">Fini</Button>
      <Button onClick={(e)=>filtreCategories(e.target.value)} value="pasfini">Pas fini</Button>
    </ButtonGroup>
  );
};

export default Categories;
