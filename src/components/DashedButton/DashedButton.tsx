import { Button } from '@fluentui/react-components';
import { useStyles } from './DashedButton.styles';
import { Add12Regular } from '@fluentui/react-icons';

interface DashedButtonProps {
  children: React.ReactNode;
}

export function DashedButton({ children }: DashedButtonProps) {
  const classes = useStyles();
  return (
    <Button className={classes.button} icon={<Add12Regular />}>
      Add section
    </Button>
  );
}

export default DashedButton;
