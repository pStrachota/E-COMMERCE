'use client';

import Button from '@/components/common/Button';
import Drawer, { useDrawer } from '@/components/common/Drawer';
import { FilterIcon } from '@/components/common/Icons';

type FilterDrawerProps = React.PropsWithChildren;

export default function FilterDrawer({ children }: FilterDrawerProps) {
  const { isOpen, open, close } = useDrawer({ closeOnRouteChange: false });

  return (
    <div className="md:hidden flex justify-end">
      <Button variant="transparent" icon={<FilterIcon />} onClick={open}>
        Filter
      </Button>
      <Drawer title="Product Filter" isOpen={isOpen} onClose={close}>
        {children}
      </Drawer>
    </div>
  );
}
