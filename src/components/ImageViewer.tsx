import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
export default function ImageViewer({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
 const dialog = useRef<HTMLDialogElement>(null);
 const trigger = useRef(document.activeElement as HTMLElement | null);
 useEffect(() => { const element = dialog.current; const previous = trigger.current; const overflow = document.body.style.overflow; document.body.style.overflow = "hidden"; element?.showModal(); return () => { element?.close(); document.body.style.overflow = overflow; previous?.focus(); }; }, []);
 return createPortal(<dialog ref={dialog} className="image-dialog" aria-label={title} onCancel={onClose} onClick={e => {if(e.target === e.currentTarget) onClose();}}><div className="viewer-bar"><div><p>{title}</p><span className="viewer-hint">Press Esc or click outside to close</span></div><button className="viewer-close" onClick={onClose} autoFocus aria-label="Close image viewer"><span>Close</span><X size={17} aria-hidden="true" /></button></div><img src={src} alt={title} /></dialog>, document.body);
}
