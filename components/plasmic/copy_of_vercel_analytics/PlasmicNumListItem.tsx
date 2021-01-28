// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iqg5FKVqRnpt5mRWXzEUTy
// Component: PRuvZwTRZwo1z
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

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_copy_of_vercel_analytics.module.css"; // plasmic-import: iqg5FKVqRnpt5mRWXzEUTy/projectcss
import sty from "./PlasmicNumListItem.module.css"; // plasmic-import: PRuvZwTRZwo1z/css

export type PlasmicNumListItem__VariantMembers = {};
export type PlasmicNumListItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicNumListItem__VariantsArgs;
export const PlasmicNumListItem__VariantProps = new Array<VariantPropType>();

export type PlasmicNumListItem__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicNumListItem__ArgsType;
export const PlasmicNumListItem__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicNumListItem__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
};

export interface DefaultNumListItemProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicNumListItem__RenderFunc(props: {
  variants: PlasmicNumListItem__VariantsArgs;
  args: PlasmicNumListItem__ArgsType;
  overrides: PlasmicNumListItem__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box)}
      >
        <p.PlasmicSlot
          defaultContents={"1"}
          value={args.slot}
          className={classNames(sty.slotSlot)}
        />
      </div>

      <p.PlasmicSlot
        defaultContents={"Navigate your project in the Vercel dashboard."}
        value={args.children}
        className={classNames(sty.slotChildren)}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNumListItem__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNumListItem__VariantsArgs;
    args?: PlasmicNumListItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNumListItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNumListItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNumListItem__ArgProps,
      internalVariantPropNames: PlasmicNumListItem__VariantProps
    });

    return PlasmicNumListItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNumListItem";
  } else {
    func.displayName = `PlasmicNumListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicNumListItem = Object.assign(
  // Top-level PlasmicNumListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicNumListItem
    internalVariantProps: PlasmicNumListItem__VariantProps,
    internalArgProps: PlasmicNumListItem__ArgProps
  }
);

export default PlasmicNumListItem;
/* prettier-ignore-end */
