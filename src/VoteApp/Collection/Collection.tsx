import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import './Collection.css'

type VoteDetailsType = {
  id: number;
  title: string;
  description: string;
  yesCount: number;
  noCount: number;
  abstainCount: number;
};

interface CollectionProps {
  items: VoteDetailsType[]; // Define the shape of the items prop
  onVoteItem: (items: {
    id: number;
    title: string;
    description: string;
    yesCount: number;
    noCount: number;
    abstainCount: number;
  }) => void
}


function LinearProgressWithLabel(props: LinearProgressProps & { value: number } & { title: String }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >{props.title}</Typography>
      </Box>

      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const Collection = ({ items, onVoteItem }: CollectionProps) => {


  return (
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid item xs={14} sm={3} md={3} key={index}>
          <Card>

            <CardContent sx={{ paddingTop: 2 }}>
              <Typography gutterBottom variant="h5" component="div">
                Title: {item.title}
              </Typography>

              <Typography gutterBottom variant="h5" component="div">
                Description: {item.description}
              </Typography>
              {/* <Typography gutterBottom variant="body2" sx={{ color: "text.secondary" }}>
                Description: {item.description}
              </Typography> */}

              {item.yesCount != 0 && (<Box sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={(item.yesCount / (item.noCount + item.yesCount + item.abstainCount)) * 100} title={"YES"} />
              </Box>)}
              {item.noCount != 0 && (<Box sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={(item.noCount / (item.noCount + item.yesCount + item.abstainCount)) * 100} title={"No"} />
              </Box>)}
              {item.abstainCount != 0 && (<Box sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={(item.abstainCount / (item.noCount + item.yesCount + item.abstainCount)) * 100} title={"Abstain"} />
              </Box>)}
            </CardContent>
            <CardActions sx={{ alignItems: "center", paddingTop: 2 }}>
              <Button
                size="small"
                variant="contained"
                color="success"
                sx={{ height: 40, width: "100%" }}
                onClick={() => onVoteItem(item)}
              >
                Vote
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default Collection;
