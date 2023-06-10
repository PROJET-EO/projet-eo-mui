import {styled} from "@mui/material/styles";
import { heiColor } from "@/common/ui/heiColor";

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:heiColor.yellow
  }));

export default SearchIconWrapper;