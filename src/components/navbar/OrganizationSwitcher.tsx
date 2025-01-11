"use client";

import {
  OrganizationSwitcher as ClerkOrgSwitcher,
  useOrganizationList,
  useOrganization,
} from "@clerk/nextjs";

export default function OrganizationSwitcher() {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  // TODO make my own switcher for smoother transitions
  return (
    <div>
      <ClerkOrgSwitcher
        afterSelectOrganizationUrl={`/classes/${organization?.id}`}
      />
    </div>
  );
}
