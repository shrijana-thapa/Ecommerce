import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./authguard.state";

export const selectAuth=createFeatureSelector<AuthState>('auth');
export const selectUser=createSelector(selectAuth,(sate)=>sate.user);
export const selectLoading=createSelector(selectAuth,(state)=>state.loading);
export const selectError=createSelector(selectAuth,(state)=> state.error);