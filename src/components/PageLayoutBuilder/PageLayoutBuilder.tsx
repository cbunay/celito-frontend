import { useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  SelectTabData,
  SelectTabEvent,
  Tab,
  TabList,
  TabValue,
} from '@fluentui/react-components';

import { AddFilled } from '@fluentui/react-icons';
import Design from '../Design/Design';
import { useStyles } from './PageLayoutBuilder.styles';

export function PageLayoutBuilder() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState<TabValue>('design');

  const onTabSelect = (e: SelectTabEvent, data: SelectTabData) => {
    setSelectedTab(data.value);
  };

  return (
    <Dialog open={open} onOpenChange={(e, data) => setOpen(data.open)}>
      <DialogTrigger disableButtonEnhancement>
        <Button>Open Page Layout Builder</Button>
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
          <DialogTitle className={classes.dialogTitle}>
            Page Layout Builder
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <TabList
              defaultSelectedValue="design"
              selectedValue={selectedTab}
              onTabSelect={onTabSelect}
            >
              <Tab value="design">Design</Tab>
              <Tab value="related-objects">Related Objects</Tab>
            </TabList>
            <div className={classes.tabPanels}>
              {selectedTab === 'design' && <Design />}
            </div>
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

export default PageLayoutBuilder;
