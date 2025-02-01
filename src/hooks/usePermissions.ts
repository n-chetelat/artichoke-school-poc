import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

export function usePermissions() {
  const { has } = useAuth();
  const [canCreate, setCanCreate] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [canAssign, setCanAssign] = useState(false);
  useEffect(() => {
    if (has) {
      setCanCreate(has({ permission: "org:hw:create" }));
      setCanEdit(has({ permission: "org:hw:edit" }));
      setCanAssign(has({ permission: "org:hw:assign" }));
    }
  }, [has]);
  return { canCreate, canEdit, canAssign };
}
