// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iqg5FKVqRnpt5mRWXzEUTy
// Component: 2aYdWqZ9T1xmx
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import AnalyticsPage from "../../AnalyticsPage"; // plasmic-import: SVMA0EAGaHP/component
import AnalyticsPageContent from "../../AnalyticsPageContent"; // plasmic-import: 4o34z0-A3Cr0-W/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_copy_of_vercel_analytics.module.css"; // plasmic-import: iqg5FKVqRnpt5mRWXzEUTy/projectcss
import sty from "./PlasmicVercelPageShell.module.css"; // plasmic-import: 2aYdWqZ9T1xmx/css

export type PlasmicVercelPageShell__VariantMembers = {};
export type PlasmicVercelPageShell__VariantsArgs = {};
type VariantPropType = keyof PlasmicVercelPageShell__VariantsArgs;
export const PlasmicVercelPageShell__VariantProps = new Array<VariantPropType>();

export type PlasmicVercelPageShell__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicVercelPageShell__ArgsType;
export const PlasmicVercelPageShell__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicVercelPageShell__OverridesType = {
  root?: p.Flex<typeof AnalyticsPage>;
  analyticsPageContent?: p.Flex<typeof AnalyticsPageContent>;
};

export interface DefaultVercelPageShellProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicVercelPageShell__RenderFunc(props: {
  variants: PlasmicVercelPageShell__VariantsArgs;
  args: PlasmicVercelPageShell__ArgsType;
  overrides: PlasmicVercelPageShell__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <AnalyticsPage
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      <p.PlasmicSlot
        defaultContents={
          <AnalyticsPageContent
            data-plasmic-name={"analyticsPageContent"}
            data-plasmic-override={overrides.analyticsPageContent}
            className={classNames("__wab_instance", sty.analyticsPageContent)}
          />
        }
        value={args.children}
      />
    </AnalyticsPage>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "analyticsPageContent"],
  analyticsPageContent: ["analyticsPageContent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof AnalyticsPage;
  analyticsPageContent: typeof AnalyticsPageContent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVercelPageShell__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicVercelPageShell__VariantsArgs;
    args?: PlasmicVercelPageShell__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicVercelPageShell__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicVercelPageShell__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicVercelPageShell__ArgProps,
      internalVariantPropNames: PlasmicVercelPageShell__VariantProps
    });

    return PlasmicVercelPageShell__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVercelPageShell";
  } else {
    func.displayName = `PlasmicVercelPageShell.${nodeName}`;
  }
  return func;
}

export const PlasmicVercelPageShell = Object.assign(
  // Top-level PlasmicVercelPageShell renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    analyticsPageContent: makeNodeComponent("analyticsPageContent"),

    // Metadata about props expected for PlasmicVercelPageShell
    internalVariantProps: PlasmicVercelPageShell__VariantProps,
    internalArgProps: PlasmicVercelPageShell__ArgProps
  }
);

export default PlasmicVercelPageShell;
/* prettier-ignore-end */
