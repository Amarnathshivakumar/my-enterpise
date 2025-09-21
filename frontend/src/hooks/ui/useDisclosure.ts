import { useCallback, useState } from "react";

interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

interface UseDisclosureProps {
  defaultIsOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

/**
 * A hook for controlling disclosure states like modals, dropdowns, and drawers.
 *
 * @example
 * ```tsx
 * // Modal component using useDisclosure
 * const Modal = () => {
 *   const { isOpen, onOpen, onClose } = useDisclosure();
 *
 *   return (
 *     <>
 *       <Button onClick={onOpen}>Open Modal</Button>
 *
 *       {isOpen && (
 *         <div className="modal">
 *           <div className="modal-content">
 *             <h2>Modal Title</h2>
 *             <p>Modal content goes here...</p>
 *             <Button onClick={onClose}>Close</Button>
 *           </div>
 *         </div>
 *       )}
 *     </>
 *   );
 * };
 * ```
 */
export function useDisclosure(
  props: UseDisclosureProps = {}
): UseDisclosureReturn {
  const {
    defaultIsOpen = false,
    onOpen: onOpenProp,
    onClose: onCloseProp,
  } = props;

  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onOpen = useCallback(() => {
    setIsOpen(true);
    if (onOpenProp) {
      onOpenProp();
    }
  }, [onOpenProp]);

  const onClose = useCallback(() => {
    setIsOpen(false);
    if (onCloseProp) {
      onCloseProp();
    }
  }, [onCloseProp]);

  const onToggle = useCallback(() => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }, [isOpen, onOpen, onClose]);

  return { isOpen, onOpen, onClose, onToggle };
}
