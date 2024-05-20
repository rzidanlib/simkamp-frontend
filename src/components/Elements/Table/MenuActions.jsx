import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { EllipsisVerticalIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { PencilIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

const styles = {
  default: 'flex items-center gap-4',
  detail: {
    bgColor:
      'hover:bg-light-blue-50 hover:bg-opacity-80 focus:bg-light-blue-50 focus:bg-opacity-80 active:bg-light-blue-50 active:bg-opacity-80',
    color: 'hover:text-light-blue-500 focus:text-light-blue-500 active:text-light-blue-500',
  },
  edit: {
    bgColor:
      'hover:bg-light-green-50 hover:bg-opacity-80 focus:bg-light-green-50 focus:bg-opacity-80 active:bg-light-green-50 active:bg-opacity-80',
    color: 'hover:text-light-green-500 focus:text-light-green-500 active:text-light-green-500',
  },
  delete: {
    bgColor:
      'hover:bg-red-50 hover:bg-opacity-80 focus:bg-red-50 focus:bg-opacity-80 active:bg-red-50 active:bg-opacity-80',
    color: 'hover:text-red-500 focus:text-red-500 active:text-red-500',
  },
};

export const MenuActions = ({ detailPath, editPath, onDelete }) => {
  const navigate = useNavigate();

  return (
    <Menu placement="left-start">
      <MenuHandler>
        <IconButton variant="text">
          <EllipsisVerticalIcon className="h-6 w-6" />
        </IconButton>
      </MenuHandler>
      <MenuList className="p-2">
        {detailPath && (
          <MenuItem
            className={`${styles.default} ${styles.detail.bgColor} ${styles.detail.color}`}
            onClick={() => {
              navigate(detailPath);
            }}
          >
            <EyeIcon strokeWidth={2} className="h-5 w-5 " />
            <Typography variant="small" className={styles.detail.color}>
              Detail
            </Typography>
          </MenuItem>
        )}

        {editPath && (
          <MenuItem
            className={`${styles.default} ${styles.edit.bgColor} ${styles.edit.color}`}
            onClick={() => {
              navigate(editPath);
            }}
          >
            <PencilIcon strokeWidth={2} className="h-5 w-5 " />
            <Typography variant="small" className={styles.edit.color}>
              Edit
            </Typography>
          </MenuItem>
        )}

        {onDelete && (
          <MenuItem
            className={`${styles.default} ${styles.delete.bgColor} ${styles.delete.color}`}
            onClick={onDelete}
          >
            <TrashIcon strokeWidth={2} className="h-5 w-5 " />
            <Typography variant="small" className={styles.delete.color}>
              Delete
            </Typography>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

MenuActions.propTypes = {
  detailPath: PropTypes.string,
  editPath: PropTypes.string,
  onDelete: PropTypes.func,
};
