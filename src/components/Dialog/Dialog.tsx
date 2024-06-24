import { ReactNode, useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
} from '@fluentui/react-components';

import { AddFilled } from '@fluentui/react-icons';
import { useStyles } from './Dialog.styles';
import { title } from 'process';

interface DialogProps {
  children: ReactNode;
  trigger: ReactNode;
}

export function CustomDialog({ children, trigger }: DialogProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={(e, data) => setOpen(data.open)}>
      <DialogTrigger disableButtonEnhancement>
        <span>{trigger}</span>
      </DialogTrigger>
      <DialogSurface
        className={classes.dialogSurface}
        backdrop={{ className: classes.dialogDackdrop }}
      >
        <DialogTrigger disableButtonEnhancement>
          <div className={classes.closeButton}>
            <Button icon={<AddFilled className={classes.closeIcon} />} />
          </div>
        </DialogTrigger>
        <DialogBody className={classes.dialogBody}>
          <DialogTitle className={classes.dialogTitle}>{title}</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            {children}
          </DialogContent>
          <DialogActions className={classes.dialogActions} fluid>
            <DialogTrigger>
              <Button appearance="subtle" className={classes.cancelButton}>
                Cancel Request
              </Button>
            </DialogTrigger>
            <Button appearance="primary">Save Design</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}

export default CustomDialog;
