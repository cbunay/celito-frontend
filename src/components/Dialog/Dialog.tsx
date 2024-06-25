import { Children, ReactNode, useState } from 'react';

import {
  Button,
  Dialog as CustomDialog,
  DialogActions as Actions,
  DialogBody,
  DialogContent as Content,
  DialogSurface,
  DialogTitle as Title,
  DialogTrigger,
} from '@fluentui/react-components';

import { AddFilled } from '@fluentui/react-icons';
import { useStyles } from './Dialog.styles';

interface DialogProps {
  children: ReactNode;
  trigger: ReactNode;
}

export function Dialog({ children, trigger }: DialogProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <CustomDialog open={open} onOpenChange={(e, data) => setOpen(data.open)}>
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
        <DialogBody className={classes.dialogBody}>{children}</DialogBody>
      </DialogSurface>
    </CustomDialog>
  );
}

interface DialogTitleProps {
  children: ReactNode;
}

export const DialogTitle = ({ children }: DialogTitleProps) => {
  const classes = useStyles();
  return <Title className={classes.dialogTitle}>{children}</Title>;
};
interface DialogActionsProps {
  children: ReactNode;
}

interface DialogContentProps {
  children: ReactNode;
}

export const DialogContent = ({ children }: DialogContentProps) => {
  const classes = useStyles();
  return <Content className={classes.dialogContent}>{children}</Content>;
};

export const DialogActions = ({ children }: DialogActionsProps) => {
  const classes = useStyles();
  return (
    <Actions className={classes.dialogActions} fluid>
      {children}
    </Actions>
  );
};
