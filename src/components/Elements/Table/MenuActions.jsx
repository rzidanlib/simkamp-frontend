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

export const MenuActions = ({ detailPath, editPath, onDelete }) => {
  const navigate = useNavigate();

  console.log(editPath);
  return (
    <Menu placement="left-start">
      <MenuHandler>
        <IconButton variant="text">
          <EllipsisVerticalIcon className="h-6 w-6" />
        </IconButton>
      </MenuHandler>
      <MenuList className="p-1">
        {detailPath && (
          <MenuItem
            className="flex items-center gap-4"
            onClick={() => {
              navigate(detailPath);
            }}
          >
            <EyeIcon strokeWidth={2} className="h-5 w-5 " />
            <Typography variant="small" color="blue-gray">
              Detail
            </Typography>
          </MenuItem>
        )}

        {editPath && (
          <MenuItem
            className="flex items-center gap-4"
            onClick={() => {
              navigate(editPath);
            }}
          >
            <PencilIcon strokeWidth={2} className="h-5 w-5 " />
            <Typography variant="small" color="blue-gray">
              Edit
            </Typography>
          </MenuItem>
        )}

        {onDelete && (
          <MenuItem className="flex items-center gap-4" onClick={onDelete}>
            <TrashIcon strokeWidth={2} className="h-5 w-5 " />
            <Typography variant="small" color="blue-gray">
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
