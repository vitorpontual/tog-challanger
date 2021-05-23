import React, { forwardRef, useImperativeHandle, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./styles.css"


const Modal = forwardRef((children, ref) => {
  const [isOpen, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false)
    }
  })
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              opacity: 0
            }}
            onClick={() => setOpen(false)}
            className="modal-backdrop" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              scale: 0
            }}
            className="modal-content-wrapper">
            <motion.div
              initial={{ x: 100 }}
              animate={{
                x: 0,
                transition: {
                  delay: 0.3,
                  duration: 2
                }
              }}
              exit={{
                x: 100,
                opacity: 0
              }}
              className="modal-content">{children}</motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>

  )
})

export default Modal