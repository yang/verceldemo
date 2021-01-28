// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iqg5FKVqRnpt5mRWXzEUTy
// Component: io0qhXpvcujmk
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
import sty from "./PlasmicSocial.module.css"; // plasmic-import: io0qhXpvcujmk/css

import GithubIcon from "./icons/PlasmicIcon__Github"; // plasmic-import: ps9TKJbcKmAINM/icon
import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: _Lw8B3f2DTrRvc/icon

export type PlasmicSocial__VariantMembers = {};
export type PlasmicSocial__VariantsArgs = {};
type VariantPropType = keyof PlasmicSocial__VariantsArgs;
export const PlasmicSocial__VariantProps = new Array<VariantPropType>();

export type PlasmicSocial__ArgsType = {};
type ArgPropType = keyof PlasmicSocial__ArgsType;
export const PlasmicSocial__ArgProps = new Array<ArgPropType>();

export type PlasmicSocial__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSocialProps {
  className?: string;
}

function PlasmicSocial__RenderFunc(props: {
  variants: PlasmicSocial__VariantsArgs;
  args: PlasmicSocial__ArgsType;
  overrides: PlasmicSocial__OverridesType;
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
      <GithubIcon
        className={classNames(defaultcss.all, sty.svg__o55Up)}
        role={"img"}
      />

      <TwitterIcon
        className={classNames(defaultcss.all, sty.svg__drV5R)}
        role={"img"}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSocial__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSocial__VariantsArgs;
    args?: PlasmicSocial__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSocial__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSocial__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSocial__ArgProps,
      internalVariantPropNames: PlasmicSocial__VariantProps
    });

    return PlasmicSocial__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSocial";
  } else {
    func.displayName = `PlasmicSocial.${nodeName}`;
  }
  return func;
}

export const PlasmicSocial = Object.assign(
  // Top-level PlasmicSocial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSocial
    internalVariantProps: PlasmicSocial__VariantProps,
    internalArgProps: PlasmicSocial__ArgProps
  }
);

export default PlasmicSocial;
/* prettier-ignore-end */
