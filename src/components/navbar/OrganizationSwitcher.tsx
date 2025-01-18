"use client";

import { useOrganizationList, useOrganization, useUser } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { OrganizationResource } from "@clerk/types";
import { ArrowRight, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function OrganizationSwitcher() {
  const router = useRouter();
  const { user } = useUser();
  const { organization } = useOrganization();
  const { setActive, userMemberships } = useOrganizationList({
    userMemberships: true,
  });

  const avatarUrl = organization ? organization.imageUrl : user?.imageUrl;
  const avatarFallback = organization
    ? organization.name.slice(0, 1)
    : user?.firstName?.slice(0, 1);
  const currentLabel = organization ? (
    <Link href="/courses/dashboard">{organization.name}</Link>
  ) : (
    user?.fullName
  );

  const otherOrgs: OrganizationResource[] = [];
  if (userMemberships.data && userMemberships.data.length > 1) {
    userMemberships.data.forEach((membership) => {
      if (membership.organization.id !== organization?.id) {
        otherOrgs.push(membership.organization);
      }
    });
  }

  const switchToPersonalDashbaord = async () => {
    await setActive!({ organization: null });
    router.replace("/");
  };

  const switchToOrgDashboard = async (orgId: string) => {
    await setActive!({ organization: orgId });
    router.replace(`/courses/dashboard`);
  };

  return (
    <DropdownMenu>
      <div className="flex flex-row items-center gap-2">
        <DropdownMenuTrigger className="outline-none">
          <Avatar className="w-8 h-8 cursor-pointer rounded-sm">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <p className="text-sm">{currentLabel}</p>
      </div>
      <DropdownMenuContent
        className="bg-white rounded-sm p-2"
        align="end"
        alignOffset={10}
      >
        <DropdownMenuLabel className="flex flex-row items-center gap-2">
          <ArrowLeftRight size={16} />
          Switch
        </DropdownMenuLabel>

        {!!otherOrgs.length && (
          <>
            <DropdownMenuSeparator />
            {otherOrgs.map((org) => (
              <DropdownMenuItem key={org.id}>
                <Button
                  variant="link"
                  onClick={() => switchToOrgDashboard(org.id)}
                >
                  <Avatar className="h-8 w-8 rounded-sm">
                    <AvatarImage src={org.imageUrl} />
                    <AvatarFallback>{org.name.slice(0, 1)}</AvatarFallback>
                  </Avatar>
                  {org.name}
                </Button>
              </DropdownMenuItem>
            ))}
          </>
        )}
        {!!organization && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-xs">
              <Button variant="link" onClick={switchToPersonalDashbaord}>
                Student dashboard
                <ArrowRight />
              </Button>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
